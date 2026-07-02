import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { Guarantee, GuaranteeStatus } from './entities/guarantee.entity';

@Injectable()
export class GuaranteesService extends CrudService<Guarantee> {
  constructor(
    @InjectRepository(Guarantee)
    repository: Repository<Guarantee>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Guarantee | null> {
    return this.repository.findOne({ where: { code } });
  }

  async findByBank(bankId: string): Promise<Guarantee[]> {
    return this.repository.find({ where: { bankId } });
  }

  async findByStatus(status: GuaranteeStatus): Promise<Guarantee[]> {
    return this.repository.find({ where: { status } });
  }

  async findExpiring(): Promise<Guarantee[]> {
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return this.repository.find({
      where: {
        status: GuaranteeStatus.ACTIVE,
        expiryDate: LessThanOrEqual(thirtyDaysFromNow),
      },
    });
  }
}
