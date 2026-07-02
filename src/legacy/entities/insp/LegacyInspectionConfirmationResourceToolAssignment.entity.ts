import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionConfirmationResourceToolAssignment' })
export class LegacyInspectionConfirmationResourceToolAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionConfirmationResourceToolAssignmentID' })
  inspectionConfirmationResourceToolAssignmentID: number;

  @Column({ type: 'bigint', name: 'InspectionConfirmationRef' })
  inspectionConfirmationRef: number;

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