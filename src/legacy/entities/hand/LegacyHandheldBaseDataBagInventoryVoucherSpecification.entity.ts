import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBaseDataBagInventoryVoucherSpecification' })
export class LegacyHandheldBaseDataBagInventoryVoucherSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBaseDataBagInventoryVoucherSpecificationID' })
  handheldBaseDataBagInventoryVoucherSpecificationID: number;

  @Column({ type: 'bigint', name: 'HandheldBaseDataBagRef' })
  handheldBaseDataBagRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}