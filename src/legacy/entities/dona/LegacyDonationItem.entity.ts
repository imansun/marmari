import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DonationItem' })
export class LegacyDonationItem {
  @PrimaryColumn({ type: 'bigint', name: 'DonationItemID' })
  donationItemID: number;

  @Column({ type: 'bigint', name: 'DonationRef' })
  donationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'numeric', name: 'ExpenditureSide', nullable: true })
  expenditureSide: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}