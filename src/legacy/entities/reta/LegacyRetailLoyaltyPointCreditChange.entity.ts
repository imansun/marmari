import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailLoyaltyPointCreditChange' })
export class LegacyRetailLoyaltyPointCreditChange {
  @PrimaryColumn({ type: 'bigint', name: 'RetailLoyaltyPointCreditChangeID' })
  retailLoyaltyPointCreditChangeID: number;

  @Column({ type: 'integer', name: 'ChangeType' })
  changeType: number;

  @Column({ type: 'character varying', name: 'Metadata', nullable: true })
  metadata: string | null;

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

  @Column({ type: 'bigint', name: 'LoyaltyMemberRef', nullable: true })
  loyaltyMemberRef: number | null;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef', nullable: true })
  loyaltyProgramRef: number | null;

  @Column({ type: 'integer', name: 'Subject' })
  subject: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

}