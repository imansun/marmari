import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CollectorDefaultCompany' })
export class LegacyCollectorDefaultCompany {
  @PrimaryColumn({ type: 'bigint', name: 'CollectorDefaultCompanyID' })
  collectorDefaultCompanyID: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}