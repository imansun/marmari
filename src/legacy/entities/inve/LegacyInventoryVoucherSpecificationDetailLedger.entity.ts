import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherSpecificationDetailLedger' })
export class LegacyInventoryVoucherSpecificationDetailLedger {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSpecificationDetailLedgerID' })
  inventoryVoucherSpecificationDetailLedgerID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'boolean', name: 'VisibleInItem' })
  visibleInItem: boolean;

  @Column({ type: 'boolean', name: 'RequiredOnSaving' })
  requiredOnSaving: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}