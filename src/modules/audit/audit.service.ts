import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, FindOptionsWhere } from 'typeorm';
import { CrudService } from '../../core';
import { AuditLog, AuditAction } from './entities/audit-log.entity';

@Injectable()
export class AuditService extends CrudService<AuditLog> {
  constructor(
    @InjectRepository(AuditLog)
    repository: Repository<AuditLog>,
  ) {
    super(repository);
  }

  async log(dto: {
    entityType: string;
    entityId?: string;
    action: AuditAction;
    userId: string;
    username?: string;
    oldValues?: Record<string, unknown>;
    newValues?: Record<string, unknown>;
    description?: string;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<AuditLog> {
    return this.repository.save(this.repository.create(dto));
  }

  async query(filters: {
    entityType?: string;
    entityId?: string;
    action?: AuditAction;
    userId?: string;
    fromDate?: string;
    toDate?: string;
    page?: number;
    limit?: number;
  }) {
    const where: FindOptionsWhere<AuditLog> = {};

    if (filters.entityType) where.entityType = filters.entityType;
    if (filters.entityId) where.entityId = filters.entityId;
    if (filters.action) where.action = filters.action;
    if (filters.userId) where.userId = filters.userId;
    if (filters.fromDate && filters.toDate) {
      where.createdAt = Between(
        new Date(filters.fromDate),
        new Date(filters.toDate),
      );
    }

    return this.paginate(
      { page: filters.page ?? 1, limit: filters.limit ?? 50 },
      { where, order: { createdAt: 'DESC' } },
    );
  }

  async findByEntity(
    entityType: string,
    entityId: string,
  ): Promise<AuditLog[]> {
    return this.repository.find({
      where: { entityType, entityId },
      order: { createdAt: 'DESC' },
    });
  }
}
