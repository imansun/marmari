import { Entity, Column, Index } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';

export enum AuditAction {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LOGIN = 'login',
  LOGOUT = 'logout',
  EXPORT = 'export',
  IMPORT = 'import',
  APPROVE = 'approve',
  REJECT = 'reject',
  CONFIRM = 'confirm',
  CANCEL = 'cancel',
  OTHER = 'other',
}

@Entity('audit_logs', { schema: 'public' })
export class AuditLog extends BaseEntity {
  @ApiProperty()
  @Column({ length: 100 })
  @Index()
  entityType: string;

  @ApiPropertyOptional()
  @Column({ nullable: true })
  @Index()
  entityId?: string;

  @ApiProperty({ enum: AuditAction })
  @Column({
    type: 'enum',
    enum: AuditAction,
    default: AuditAction.OTHER,
  })
  @Index()
  action: AuditAction;

  @ApiProperty()
  @Column()
  @Index()
  userId: string;

  @ApiPropertyOptional()
  @Column({ length: 100, nullable: true })
  username?: string;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  oldValues?: Record<string, unknown>;

  @ApiPropertyOptional()
  @Column({ type: 'jsonb', nullable: true })
  newValues?: Record<string, unknown>;

  @ApiPropertyOptional()
  @Column({ length: 500, nullable: true })
  description?: string;

  @ApiPropertyOptional()
  @Column({ length: 50, nullable: true })
  ipAddress?: string;

  @ApiPropertyOptional()
  @Column({ length: 255, nullable: true })
  userAgent?: string;
}
