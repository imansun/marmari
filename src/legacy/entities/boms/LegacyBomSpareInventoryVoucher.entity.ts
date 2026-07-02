import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BomSpareInventoryVoucher' })
export class LegacyBomSpareInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'BomSpareInventoryVoucherID' })
  bomSpareInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'BomSpareRef' })
  bomSpareRef: number;

  @Column({ type: 'boolean', name: 'IsAutoConsume', default: false })
  isAutoConsume: boolean;

  @Column({ type: 'integer', name: 'IssueMethod', nullable: true })
  issueMethod: number | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef', nullable: true })
  inventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InterStoreRef', nullable: true })
  interStoreRef: number | null;

}