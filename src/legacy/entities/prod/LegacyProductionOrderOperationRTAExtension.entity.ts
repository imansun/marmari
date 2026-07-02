import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderOperationRTAExtension' })
export class LegacyProductionOrderOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderOperationRTAExtensionID' })
  productionOrderOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationResourceToolAssignmentRef' })
  productionOrderOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}