import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompanyItem' })
export class LegacyCompanyItem {
  @PrimaryColumn({ type: 'bigint', name: 'CompanyItemID' })
  companyItemID: number;

  @Column({ type: 'bigint', name: 'MasterCompanyRef' })
  masterCompanyRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}