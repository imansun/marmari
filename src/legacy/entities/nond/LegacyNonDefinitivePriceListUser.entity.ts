import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NonDefinitivePriceListUser' })
export class LegacyNonDefinitivePriceListUser {
  @PrimaryColumn({ type: 'bigint', name: 'NonDefinitivePriceListUserID' })
  nonDefinitivePriceListUserID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'UserGroupRef', nullable: true })
  userGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}