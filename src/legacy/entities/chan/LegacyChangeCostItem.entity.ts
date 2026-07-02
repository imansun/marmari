import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeCostItem' })
export class LegacyChangeCostItem {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeCostItemID' })
  changeCostItemID: number;

  @Column({ type: 'bigint', name: 'ChangeCostRef' })
  changeCostRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'numeric', name: 'IncrementDecrement' })
  incrementDecrement: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}