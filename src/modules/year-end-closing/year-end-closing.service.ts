import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { YearEndClosing, ClosingStatus } from './entities/year-end-closing.entity';

@Injectable()
export class YearEndClosingService extends CrudService<YearEndClosing> {
  constructor(
    @InjectRepository(YearEndClosing)
    repository: Repository<YearEndClosing>,
  ) {
    super(repository);
  }

  async findByFiscalYear(fiscalYearId: string): Promise<YearEndClosing[]> {
    return this.repository.find({ where: { fiscalYearId } });
  }

  async findByStatus(status: ClosingStatus): Promise<YearEndClosing[]> {
    return this.repository.find({ where: { status } });
  }

  async executeClosing(id: string): Promise<YearEndClosing> {
    const closing = await this.findOne(id);
    if (closing.status !== ClosingStatus.IN_PROGRESS) {
      throw new BadRequestException('Closing must be in progress to execute');
    }
    await this.repository.update(id, { status: ClosingStatus.COMPLETED });
    return this.findOne(id);
  }

  async reverseClosing(id: string): Promise<YearEndClosing> {
    const closing = await this.findOne(id);
    if (closing.status !== ClosingStatus.COMPLETED) {
      throw new BadRequestException('Only completed closings can be reversed');
    }
    await this.repository.update(id, { status: ClosingStatus.REVERSED });
    return this.findOne(id);
  }
}
