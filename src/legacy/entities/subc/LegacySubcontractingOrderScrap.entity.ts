import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SubcontractingOrderScrap' })
export class LegacySubcontractingOrderScrap {
  @PrimaryColumn({ type: 'bigint', name: 'SubcontractingOrderScrapID' })
  subcontractingOrderScrapID: number;

  @Column({ type: 'bigint', name: 'SubcontractingOrderRef' })
  subcontractingOrderRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'BomScrapRef' })
  bomScrapRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}