import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderScrap' })
export class LegacyProductionOrderScrap {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderScrapID' })
  productionOrderScrapID: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit' })
  automaticReceiptPermit: boolean;

  @Column({ type: 'bigint', name: 'ProductionOrderOperationRef' })
  productionOrderOperationRef: number;

  @Column({ type: 'numeric', name: 'NetQuantity' })
  netQuantity: number;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'boolean', name: 'TransferredFromRouting', nullable: true })
  transferredFromRouting: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}