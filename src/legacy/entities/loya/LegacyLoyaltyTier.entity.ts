import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyTier' })
export class LegacyLoyaltyTier {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyTierID' })
  loyaltyTierID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef' })
  loyaltyProgramRef: number;

  @Column({ type: 'bigint', name: 'LoyaltyPointTypeRef' })
  loyaltyPointTypeRef: number;

  @Column({ type: 'numeric', name: 'EntrancePoint' })
  entrancePoint: number;

  @Column({ type: 'integer', name: 'EndOfValidity', nullable: true })
  endOfValidity: number | null;

  @Column({ type: 'bigint', name: 'SpecificDateValidityDurationDays', nullable: true })
  specificDateValidityDurationDays: number | null;

  @Column({ type: 'integer', name: 'SpecificDateValidityDurationDaysBasis', nullable: true })
  specificDateValidityDurationDaysBasis: number | null;

  @Column({ type: 'integer', name: 'DowngradeMethod', nullable: true })
  downgradeMethod: number | null;

  @Column({ type: 'numeric', name: 'FixedPointAmountOfDowngrade', nullable: true })
  fixedPointAmountOfDowngrade: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SpecificLoyaltyTierRef', nullable: true })
  specificLoyaltyTierRef: number | null;

  @Column({ type: 'numeric', name: 'HoldInTierPoint' })
  holdInTierPoint: number;

}