import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceOperationResourceToolAssignmentExtension' })
export class LegacyServiceOperationResourceToolAssignmentExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceOperationResourceToolAssignmentExtensionID' })
  serviceOperationResourceToolAssignmentExtensionID: number;

  @Column({ type: 'bigint', name: 'ServiceOperationResourceToolAssignmentRef' })
  serviceOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}