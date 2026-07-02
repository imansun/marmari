import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherSpecificationDetailLedgerType' })
export class LegacyInventoryVoucherSpecificationDetailLedgerType {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSpecificationDetailLedgerTypeID' })
  inventoryVoucherSpecificationDetailLedgerTypeID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationDetailLedgerRef' })
  inventoryVoucherSpecificationDetailLedgerRef: number;

  @Column({ type: 'bigint', name: 'DetailLedgerType' })
  detailLedgerType: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}