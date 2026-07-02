import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderLowerGradeProduct' })
export class LegacyProductionOrderLowerGradeProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderLowerGradeProductID' })
  productionOrderLowerGradeProductID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef', nullable: true })
  productionOrderRef: number | null;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit' })
  automaticReceiptPermit: boolean;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}