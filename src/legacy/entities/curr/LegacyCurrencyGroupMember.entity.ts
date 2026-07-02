import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CurrencyGroupMember' })
export class LegacyCurrencyGroupMember {
  @PrimaryColumn({ type: 'bigint', name: 'CurrencyGroupMemberID' })
  currencyGroupMemberID: number;

  @Column({ type: 'bigint', name: 'GroupingRef' })
  groupingRef: number;

  @Column({ type: 'bigint', name: 'GroupRef' })
  groupRef: number;

  @Column({ type: 'bigint', name: 'MemberID' })
  memberID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}