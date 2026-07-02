import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineCustomerChange' })
export class LegacyOfflineCustomerChange {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineCustomerChangeID' })
  offlineCustomerChangeID: number;

  @Column({ type: 'bigint', name: 'BatchNumber' })
  batchNumber: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'PartyFirstName', nullable: true })
  partyFirstName: string | null;

  @Column({ type: 'character varying', name: 'PartyLastName', nullable: true })
  partyLastName: string | null;

  @Column({ type: 'character varying', name: 'PartyCompanyName', nullable: true })
  partyCompanyName: string | null;

  @Column({ type: 'character varying', name: 'FullName', nullable: true })
  fullName: string | null;

  @Column({ type: 'character varying', name: 'NationalID', nullable: true })
  nationalID: string | null;

  @Column({ type: 'integer', name: 'Gender', nullable: true })
  gender: number | null;

  @Column({ type: 'character varying', name: 'Mobile', nullable: true })
  mobile: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'timestamp without time zone', name: 'PartyBirthDate', nullable: true })
  partyBirthDate: Date | null;

  @Column({ type: 'character varying', name: 'EconomicCode', nullable: true })
  economicCode: string | null;

  @Column({ type: 'integer', name: 'PartyType' })
  partyType: number;

  @Column({ type: 'character varying', name: 'Tel', nullable: true })
  tel: string | null;

  @Column({ type: 'integer', name: 'MaritalStatus', nullable: true })
  maritalStatus: number | null;

  @Column({ type: 'timestamp without time zone', name: 'MarriageDate', nullable: true })
  marriageDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'EffectScope' })
  effectScope: number;

  @Column({ type: 'integer', name: 'ChangeType' })
  changeType: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'GroupingRef', nullable: true })
  groupingRef: number | null;

  @Column({ type: 'bigint', name: 'GroupRef', nullable: true })
  groupRef: number | null;

  @Column({ type: 'bigint', name: 'RetailOfflineDataRef' })
  retailOfflineDataRef: number;

  @Column({ type: 'character varying', name: 'OfflineMatchingKeysJson' })
  offlineMatchingKeysJson: string;

  @Column({ type: 'bigint', name: 'OnlineID', nullable: true })
  onlineID: number | null;

  @Column({ type: 'integer', name: 'SyncState' })
  syncState: number;

  @Column({ type: 'timestamp without time zone', name: 'SyncDate', nullable: true })
  syncDate: Date | null;

  @Column({ type: 'character varying', name: 'SyncErrorMessage', nullable: true })
  syncErrorMessage: string | null;

  @Column({ type: 'character varying', name: 'SyncError', nullable: true })
  syncError: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}