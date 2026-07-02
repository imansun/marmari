import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompanyAdminUser' })
export class LegacyCompanyAdminUser {
  @PrimaryColumn({ type: 'bigint', name: 'CompanyAdminUserID' })
  companyAdminUserID: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}