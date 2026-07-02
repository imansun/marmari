import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Company' })
export class LegacyCompany {
  @PrimaryColumn({ type: 'bigint', name: 'CompanyID' })
  companyID: number;

  @Column({ type: 'boolean', name: 'IsEnterprise' })
  isEnterprise: boolean;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_EN', nullable: true })
  nameEn: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'boolean', name: 'IsCompanyGroup', default: false })
  isCompanyGroup: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'MainOrgCode', nullable: true })
  mainOrgCode: string | null;

  @Column({ type: 'character varying', name: 'MainOrgID', nullable: true })
  mainOrgID: string | null;

}