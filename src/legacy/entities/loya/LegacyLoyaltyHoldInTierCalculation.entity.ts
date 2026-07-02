import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyHoldInTierCalculation' })
export class LegacyLoyaltyHoldInTierCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyHoldInTierCalculationID' })
  loyaltyHoldInTierCalculationID: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberRef' })
  loyaltyMemberRef: number;

  @Column({ type: 'bigint', name: 'LoyaltyTierRef' })
  loyaltyTierRef: number;

  @Column({ type: 'timestamp without time zone', name: 'LastCalculationDate', nullable: true })
  lastCalculationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}