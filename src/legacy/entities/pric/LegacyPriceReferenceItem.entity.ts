import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PriceReferenceItem' })
export class LegacyPriceReferenceItem {
  @PrimaryColumn({ type: 'bigint', name: 'PriceReferenceItemID' })
  priceReferenceItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PriceReferenceRef' })
  priceReferenceRef: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'bigint', name: 'PriceReferenceRegionalAreaRef', nullable: true })
  priceReferenceRegionalAreaRef: number | null;

  @Column({ type: 'numeric', name: 'MinFee', nullable: true })
  minFee: number | null;

  @Column({ type: 'numeric', name: 'MaxFee', nullable: true })
  maxFee: number | null;

  @Column({ type: 'numeric', name: 'AvrageFee' })
  avrageFee: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}