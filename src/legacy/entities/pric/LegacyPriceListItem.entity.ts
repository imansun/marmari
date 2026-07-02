import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceListItem' })
export class LegacyPriceListItem {
  @PrimaryColumn({ type: 'bigint', name: 'PriceListItemID' })
  priceListItemID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef', nullable: true })
  costCenterRef: number | null;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'integer', name: 'FeeReferenceCode', nullable: true })
  feeReferenceCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

}