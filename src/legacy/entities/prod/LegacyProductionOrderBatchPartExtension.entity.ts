import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderBatchPartExtension' })
export class LegacyProductionOrderBatchPartExtension {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderBatchPartExtensionID' })
  productionOrderBatchPartExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'ProductionBatchType' })
  productionBatchType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'AutomaticBatch' })
  automaticBatch: boolean;

}