import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import { PosSession, PosSessionStatus } from './entities/pos-session.entity';
import { PosOrder, PosOrderStatus } from './entities/pos-order.entity';
import { PosPayment, PaymentMethod } from './entities/pos-payment.entity';

@Injectable()
export class PosService extends CrudService<PosSession> {
  constructor(
    @InjectRepository(PosSession)
    repository: Repository<PosSession>,
    @InjectRepository(PosOrder)
    private readonly orderRepository: Repository<PosOrder>,
    @InjectRepository(PosPayment)
    private readonly paymentRepository: Repository<PosPayment>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createSession(dto: {
    code: string;
    name: string;
    posName: string;
    openingBalance?: number;
    openedById: string;
  }): Promise<PosSession> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Session code already exists');

    return this.repository.save(
      this.repository.create({
        code: dto.code,
        name: dto.name,
        posName: dto.posName,
        openingBalance: dto.openingBalance ?? 0,
        currentBalance: dto.openingBalance ?? 0,
        openedAt: new Date(),
        openedById: dto.openedById,
        status: PosSessionStatus.OPEN,
      }),
    );
  }

  async closeSession(
    id: string,
    dto: { closedById: string; declaredBalance?: number },
  ): Promise<PosSession> {
    const session = await this.findOne(id);
    if (session.status !== PosSessionStatus.OPEN) {
      throw new BadRequestException('Session is already closed');
    }

    await this.repository.update(id, {
      status: PosSessionStatus.CLOSED,
      closedAt: new Date(),
      closedById: dto.closedById,
      currentBalance: dto.declaredBalance ?? session.currentBalance,
    });
    return this.findOne(id);
  }

  async createOrder(dto: {
    sessionId: string;
    partyId?: string;
    items: Array<{
      productId: string;
      productName: string;
      quantity: number;
      unitPrice: number;
      discount?: number;
    }>;
    discountTotal?: number;
    taxTotal?: number;
    payments: Array<{
      method: PaymentMethod;
      amount: number;
      reference?: string;
    }>;
  }): Promise<PosOrder> {
    const session = await this.findOne(dto.sessionId);
    if (session.status !== PosSessionStatus.OPEN) {
      throw new BadRequestException('Session is not open');
    }

    return this.dataSource.transaction(async (em) => {
      const lastOrder = await em.find(PosOrder, {
        where: { sessionId: dto.sessionId },
        order: { orderNumber: 'DESC' },
        take: 1,
      });
      const nextNumber =
        lastOrder.length > 0 ? lastOrder[0].orderNumber + 1 : 1;

      let subtotal = 0;
      const items = dto.items.map((item) => {
        const total = item.unitPrice * item.quantity;
        const discount = item.discount ?? 0;
        subtotal += total;
        return {
          productId: item.productId,
          productName: item.productName,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          discount,
          total: total - discount,
        };
      });

      const discountTotal = dto.discountTotal ?? 0;
      const taxTotal = dto.taxTotal ?? 0;
      const grandTotal = subtotal - discountTotal + taxTotal;

      const paymentSum = dto.payments.reduce((s, p) => s + p.amount, 0);
      if (Math.abs(paymentSum - grandTotal) > 0.01) {
        throw new BadRequestException(
          `Payment total (${paymentSum}) does not match grand total (${grandTotal})`,
        );
      }

      const order = await em.save(
        em.create(PosOrder, {
          sessionId: dto.sessionId,
          orderNumber: nextNumber,
          partyId: dto.partyId,
          items,
          subtotal,
          discountTotal,
          taxTotal,
          grandTotal,
          status: PosOrderStatus.DRAFT,
        }),
      );

      const payments = dto.payments.map((p) =>
        em.create(PosPayment, {
          orderId: order.id,
          sessionId: dto.sessionId,
          method: p.method,
          amount: p.amount,
          reference: p.reference,
        }),
      );
      await em.save(PosPayment, payments);

      await em.update(PosOrder, order.id, {
        status: PosOrderStatus.PAID,
        paidAt: new Date(),
      });

      const totalPaid = dto.payments.reduce((s, p) => s + p.amount, 0);
      const sessionRepo = em.getRepository(PosSession);
      await sessionRepo.increment(
        { id: dto.sessionId },
        'currentBalance',
        totalPaid,
      );

      return em.findOneOrFail(PosOrder, { where: { id: order.id } });
    });
  }

  async voidOrder(id: string): Promise<PosOrder> {
    const order = await this.orderRepository.findOneOrFail({ where: { id } });
    if (order.status !== PosOrderStatus.PAID) {
      throw new BadRequestException('Only paid orders can be voided');
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(PosOrder, id, { status: PosOrderStatus.VOID });
      await em
        .getRepository(PosSession)
        .increment(
          { id: order.sessionId },
          'currentBalance',
          -Number(order.grandTotal),
        );
      return em.findOneOrFail(PosOrder, { where: { id } });
    });
  }

  async refundOrder(id: string): Promise<PosOrder> {
    const order = await this.orderRepository.findOneOrFail({ where: { id } });
    if (order.status !== PosOrderStatus.PAID) {
      throw new BadRequestException('Only paid orders can be refunded');
    }

    return this.dataSource.transaction(async (em) => {
      await em.update(PosOrder, id, { status: PosOrderStatus.REFUNDED });
      await em
        .getRepository(PosSession)
        .increment(
          { id: order.sessionId },
          'currentBalance',
          -Number(order.grandTotal),
        );
      return em.findOneOrFail(PosOrder, { where: { id } });
    });
  }

  async getSessionOrders(
    sessionId: string,
    page = 1,
    limit = 50,
  ): Promise<{ data: PosOrder[]; meta: any }> {
    const [data, total] = await this.orderRepository.findAndCount({
      where: { sessionId },
      order: { orderNumber: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async getOrderPayments(orderId: string): Promise<PosPayment[]> {
    return this.paymentRepository.find({ where: { orderId } });
  }

  async getOpenSessions(): Promise<PosSession[]> {
    return this.repository.find({
      where: { status: PosSessionStatus.OPEN },
      order: { openedAt: 'DESC' },
    });
  }

  async paginateOrders(
    page = 1,
    limit = 50,
    options?: Record<string, unknown>,
  ): Promise<{ data: PosOrder[]; meta: any }> {
    const [data, total] = await this.orderRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      ...options,
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findOrder(id: string): Promise<PosOrder> {
    return this.orderRepository.findOneOrFail({ where: { id } });
  }
}
