import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfigurationValue' })
export class LegacyConfigurationValue {
  @PrimaryColumn({ type: 'bigint', name: 'ConfigurationValueID' })
  configurationValueID: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'integer', name: 'Scope' })
  scope: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'text', name: 'Data', nullable: true })
  data: string | null;

  @Column({ type: 'bigint', name: 'ConfigurationGroupRef' })
  configurationGroupRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'bigint', name: 'CompanyRef', nullable: true })
  companyRef: number | null;

}