import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { CrudService } from '../../core';
import { EventsService, DomainEvents } from '../../events';
import {
  Invoice,
  InvoiceItem,
  InvoiceStatus,
  InvoiceType,
} from './entities/invoice.entity';

@Injectable()
export class InvoicingService extends CrudService<Invoice> {
  constructor(
    @InjectRepository(Invoice)
    repository: Repository<Invoice>,
    @InjectRepository(InvoiceItem)
    private readonly itemRepository: Repository<InvoiceItem>,
    private readonly events: EventsService,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    invoiceNumber: string;
    invoiceType: InvoiceType;
    partyId: string;
    date: Date;
    dueDate?: Date;
    discountAmount?: number;
    description?: string;
    items: {
      productId: string;
      description?: string;
      quantity: number;
      unitPrice: number;
      discountPercent?: number;
      taxRate?: number;
    }[];
  }): Promise<Invoice> {
    const existing = await this.repository.findOne({
      where: { invoiceNumber: dto.invoiceNumber },
    });
    if (existing) throw new ConflictException('Invoice number already exists');

    const totalAmount = dto.items.reduce(
      (s, i) => s + i.quantity * i.unitPrice,
      0,
    );
    const discountAmount = dto.discountAmount ?? 0;
    const taxableAmount = totalAmount - discountAmount;

    let taxAmount = 0;
    const items = dto.items.map((item) => {
      const itemTotal = item.quantity * item.unitPrice;
      const itemDiscount = itemTotal * ((item.discountPercent ?? 0) / 100);
      const itemTaxable = itemTotal - itemDiscount;
      const itemTax = itemTaxable * ((item.taxRate ?? 0) / 100);
      taxAmount += itemTax;

      return this.itemRepository.create({
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        discountPercent: item.discountPercent ?? 0,
        taxRate: item.taxRate ?? 0,
        totalPrice: itemTotal,
      });
    });

    const invoice = this.repository.create({
      invoiceNumber: dto.invoiceNumber,
      invoiceType: dto.invoiceType,
      partyId: dto.partyId,
      date: dto.date,
      dueDate: dto.dueDate,
      status: InvoiceStatus.DRAFT,
      totalAmount,
      discountAmount,
      taxAmount,
      finalAmount: taxableAmount + taxAmount,
      description: dto.description,
    });
    const saved = await this.repository.save(invoice);

    for (const item of items) {
      item.invoiceId = saved.id;
    }
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async issue(id: string): Promise<Invoice> {
    const inv = await this.findOne(id);
    if (inv.status !== InvoiceStatus.DRAFT) {
      throw new BadRequestException('Only draft invoices can be issued');
    }
    inv.status = InvoiceStatus.ISSUED;
    await this.repository.save(inv);
    this.events.emit(DomainEvents.INVOICE_ISSUED, {
      type: DomainEvents.INVOICE_ISSUED,
      entityId: id,
      data: { invoiceNumber: inv.invoiceNumber, finalAmount: inv.finalAmount },
    });
    return this.findOne(inv.id);
  }

  async markPaid(id: string): Promise<Invoice> {
    const inv = await this.findOne(id);
    if (inv.status !== InvoiceStatus.ISSUED) {
      throw new BadRequestException('Only issued invoices can be paid');
    }
    inv.status = InvoiceStatus.PAID;
    await this.repository.save(inv);
    this.events.emit(DomainEvents.INVOICE_PAID, {
      type: DomainEvents.INVOICE_PAID,
      entityId: id,
      data: { invoiceNumber: inv.invoiceNumber, finalAmount: inv.finalAmount },
    });
    return this.findOne(inv.id);
  }

  async cancel(id: string): Promise<Invoice> {
    const inv = await this.findOne(id);
    if (
      inv.status === InvoiceStatus.PAID ||
      inv.status === InvoiceStatus.CANCELLED
    ) {
      throw new BadRequestException('Cannot cancel this invoice');
    }
    inv.status = InvoiceStatus.CANCELLED;
    await this.repository.save(inv);
    this.events.emit(DomainEvents.INVOICE_CANCELLED, {
      type: DomainEvents.INVOICE_CANCELLED,
      entityId: id,
      data: { invoiceNumber: inv.invoiceNumber },
    });
    return this.findOne(inv.id);
  }

  async getOverdue(): Promise<Invoice[]> {
    const now = new Date();
    return this.repository.find({
      where: {
        status: InvoiceStatus.ISSUED,
        dueDate: LessThan(now),
      },
      relations: { party: true, items: { product: true } },
      order: { dueDate: 'ASC' },
    });
  }

  async getSummary(): Promise<{
    draft: number;
    issued: number;
    paid: number;
    cancelled: number;
    totalIssued: number;
    totalPaid: number;
    totalOutstanding: number;
    totalAmount: number;
    count: number;
  }> {
    const all = await this.repository.find();
    const draft = all.filter((i) => i.status === InvoiceStatus.DRAFT).length;
    const issued = all.filter((i) => i.status === InvoiceStatus.ISSUED).length;
    const paid = all.filter((i) => i.status === InvoiceStatus.PAID).length;
    const cancelled = all.filter(
      (i) => i.status === InvoiceStatus.CANCELLED,
    ).length;
    const totalIssued = all
      .filter((i) => i.status === InvoiceStatus.ISSUED)
      .reduce((s, i) => s + Number(i.finalAmount), 0);
    const totalPaid = all
      .filter((i) => i.status === InvoiceStatus.PAID)
      .reduce((s, i) => s + Number(i.finalAmount), 0);
    const totalOutstanding = totalIssued;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayInvoices = all.filter((i) => i.date >= todayStart);
    const totalAmount = todayInvoices.reduce(
      (s, i) => s + Number(i.finalAmount),
      0,
    );
    const count = todayInvoices.length;
    return {
      draft,
      issued,
      paid,
      cancelled,
      totalIssued,
      totalPaid,
      totalOutstanding,
      totalAmount,
      count,
    };
  }

  async findByParty(partyId: string): Promise<Invoice[]> {
    return this.repository.find({
      where: { partyId },
      relations: { party: true, items: { product: true } },
    });
  }

  async findOne(id: string): Promise<Invoice> {
    const inv = await this.repository.findOne({
      where: { id },
      relations: { party: true, items: { product: true } },
    });
    if (!inv) throw new NotFoundException('Invoice not found');
    return inv;
  }
}
