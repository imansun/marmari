import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AuditLog' })
export class LegacyAuditLog {
  @PrimaryColumn({ type: 'bigint', name: 'AuditLogID' })
  auditLogID: number;

  @Column({ type: 'bigint', name: 'EntityId' })
  entityId: number;

  @Column({ type: 'character varying', name: 'EntityType' })
  entityType: string;

  @Column({ type: 'bigint', name: 'EmployeeId' })
  employeeId: number;

  @Column({ type: 'smallint', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'timestamp without time zone', name: 'IssueDate' })
  issueDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate', nullable: true })
  effectiveDate: Date | null;

}