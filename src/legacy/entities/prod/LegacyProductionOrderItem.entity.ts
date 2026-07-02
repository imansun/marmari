import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderItem' })
export class LegacyProductionOrderItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderItemID' })
  productionOrderItemID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'bigint', name: 'CoProductRef', nullable: true })
  coProductRef: number | null;

  @Column({ type: 'bigint', name: 'ProductionOrderScrapRef', nullable: true })
  productionOrderScrapRef: number | null;

  @Column({ type: 'bigint', name: 'ProductionOrderLowerGradeProductRef', nullable: true })
  productionOrderLowerGradeProductRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}