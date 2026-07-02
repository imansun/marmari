import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompanyAdminUserItem' })
export class LegacyCompanyAdminUserItem {
  @PrimaryColumn({ type: 'bigint', name: 'CompanyAdminUserItemID' })
  companyAdminUserItemID: number;

  @Column({ type: 'bigint', name: 'CompanyAdminUserRef' })
  companyAdminUserRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}