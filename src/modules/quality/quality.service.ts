import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  QualityCheck,
  QualityCheckStatus,
  QualityCheckType,
} from './entities/quality-check.entity';
import {
  QualityCheckItem,
  CheckResult,
} from './entities/quality-check-item.entity';

@Injectable()
export class QualityService extends CrudService<QualityCheck> {
  constructor(
    @InjectRepository(QualityCheck)
    repository: Repository<QualityCheck>,
    @InjectRepository(QualityCheckItem)
    private readonly itemRepository: Repository<QualityCheckItem>,
  ) {
    super(repository);
  }

  async createCheck(dto: {
    code: string;
    checkType: string;
    referenceType: string;
    referenceId: string;
    productId: string;
    inspectorId?: string;
    checkDate: string;
    notes?: string;
    items: Array<{
      parameter: string;
      expectedValue: string;
      actualValue: string;
      result: string;
      notes?: string;
    }>;
  }): Promise<QualityCheck> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing)
      throw new ConflictException('Quality check code already exists');

    const items = dto.items.map((item) =>
      this.itemRepository.create({
        parameter: item.parameter,
        expectedValue: item.expectedValue,
        actualValue: item.actualValue,
        result: item.result as CheckResult,
        notes: item.notes,
      }),
    );

    const allPassed = items.every((i) => i.result === CheckResult.PASS);
    const status = allPassed
      ? QualityCheckStatus.PASSED
      : QualityCheckStatus.PENDING;

    const check = this.repository.create({
      code: dto.code,
      checkType: dto.checkType as QualityCheckType,
      status,
      referenceType: dto.referenceType,
      referenceId: dto.referenceId,
      productId: dto.productId,
      inspectorId: dto.inspectorId,
      checkDate: new Date(dto.checkDate),
      notes: dto.notes,
      items,
    });

    return this.repository.save(check);
  }

  async updateCheck(
    id: string,
    dto: Partial<{
      status: QualityCheckStatus;
      notes: string;
      items: Array<{
        parameter: string;
        expectedValue: string;
        actualValue: string;
        result: string;
        notes?: string;
      }>;
    }>,
  ): Promise<QualityCheck> {
    const check = await this.findOne(id);
    if (
      check.status === QualityCheckStatus.PASSED ||
      check.status === QualityCheckStatus.FAILED
    ) {
      throw new BadRequestException('Cannot update a finalized check');
    }

    if (dto.status !== undefined) {
      await this.repository.update(id, { status: dto.status });
    }
    if (dto.notes !== undefined) {
      await this.repository.update(id, { notes: dto.notes });
    }
    if (dto.items !== undefined) {
      await this.itemRepository.softDelete({ qualityCheckId: id });
      const items = dto.items.map((item) =>
        this.itemRepository.create({
          qualityCheckId: id,
          parameter: item.parameter,
          expectedValue: item.expectedValue,
          actualValue: item.actualValue,
          result: item.result as CheckResult,
          notes: item.notes,
        }),
      );
      await this.itemRepository.save(items);
    }

    if (
      dto.status === QualityCheckStatus.PASSED ||
      dto.status === QualityCheckStatus.IN_PROGRESS
    ) {
      return this.findOne(id);
    }

    const refreshed = await this.findOne(id);
    const allPassed = refreshed.items.every(
      (i) => i.result === CheckResult.PASS,
    );
    const anyFailed = refreshed.items.some(
      (i) => i.result === CheckResult.FAIL,
    );

    let autoStatus = refreshed.status;
    if (allPassed) autoStatus = QualityCheckStatus.PASSED;
    else if (anyFailed && refreshed.status !== QualityCheckStatus.REWORK) {
      autoStatus = QualityCheckStatus.FAILED;
    }

    if (autoStatus !== refreshed.status) {
      await this.repository.update(id, { status: autoStatus });
    }

    return this.findOne(id);
  }

  async getByReference(
    referenceType: string,
    referenceId: string,
  ): Promise<QualityCheck[]> {
    return this.repository.find({
      where: { referenceType, referenceId },
      order: { checkDate: 'DESC' },
    });
  }

  async getByProduct(productId: string): Promise<QualityCheck[]> {
    return this.repository.find({
      where: { productId },
      order: { checkDate: 'DESC' },
    });
  }

  async getByInspector(inspectorId: string): Promise<QualityCheck[]> {
    return this.repository.find({
      where: { inspectorId },
      order: { checkDate: 'DESC' },
    });
  }
}
