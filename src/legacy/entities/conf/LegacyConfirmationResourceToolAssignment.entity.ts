import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationResourceToolAssignment' })
export class LegacyConfirmationResourceToolAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationResourceToolAssignmentID' })
  confirmationResourceToolAssignmentID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'ResourceToolRef', nullable: true })
  resourceToolRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'timestamp without time zone', name: 'UsageStartTime', nullable: true })
  usageStartTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'UsageEndTime', nullable: true })
  usageEndTime: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}