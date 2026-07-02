import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyMemberCard' })
export class LegacyLoyaltyMemberCard {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberCardID' })
  loyaltyMemberCardID: number;

  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyMemberRef' })
  loyaltyMemberRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'bigint', name: 'CardRef' })
  cardRef: number;

}