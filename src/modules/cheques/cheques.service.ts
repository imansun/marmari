import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Cheque, ChequeStatus } from './entities/cheque.entity';

@Injectable()
export class ChequesService extends CrudService<Cheque> {
  constructor(
    @InjectRepository(Cheque)
    repository: Repository<Cheque>,
  ) {
    super(repository);
  }

  async findByChequeNumber(chequeNumber: string): Promise<Cheque | null> {
    return this.repository.findOne({ where: { chequeNumber } });
  }

  async findByStatus(status: ChequeStatus): Promise<Cheque[]> {
    return this.repository.find({ where: { status } });
  }

  private readonly validTransitions: Record<ChequeStatus, ChequeStatus[]> = {
    [ChequeStatus.ISSUED]: [ChequeStatus.DEPOSITED, ChequeStatus.CANCELLED],
    [ChequeStatus.RECEIVED]: [ChequeStatus.DEPOSITED, ChequeStatus.CANCELLED],
    [ChequeStatus.DEPOSITED]: [ChequeStatus.CASHED, ChequeStatus.BOUNCED],
    [ChequeStatus.CASHED]: [],
    [ChequeStatus.BOUNCED]: [ChequeStatus.DEPOSITED, ChequeStatus.CANCELLED],
    [ChequeStatus.CANCELLED]: [],
  };

  async updateStatus(id: string, newStatus: ChequeStatus): Promise<Cheque> {
    const cheque = await this.findOne(id);
    const allowed = this.validTransitions[cheque.status];
    if (!allowed.includes(newStatus)) {
      throw new BadRequestException(
        `Cannot transition from ${cheque.status} to ${newStatus}`,
      );
    }

    const updateData: Partial<Cheque> = { status: newStatus };
    if (newStatus === ChequeStatus.DEPOSITED)
      updateData.depositedAt = new Date();
    if (newStatus === ChequeStatus.CASHED) updateData.cashedAt = new Date();

    await this.repository.update(id, updateData);
    return this.findOne(id);
  }
}
