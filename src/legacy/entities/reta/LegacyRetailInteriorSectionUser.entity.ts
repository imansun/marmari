import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSectionUser' })
export class LegacyRetailInteriorSectionUser {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionUserID' })
  retailInteriorSectionUserID: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef' })
  retailInteriorSectionRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'UserGroupRef', nullable: true })
  userGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}