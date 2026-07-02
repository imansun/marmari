import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementPlaceDefaultCompany' })
export class LegacySettlementPlaceDefaultCompany {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementPlaceDefaultCompanyID' })
  settlementPlaceDefaultCompanyID: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}