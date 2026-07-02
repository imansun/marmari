import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Retirement123FormReportSetting' })
export class LegacyRetirement123FormReportSetting {
  @PrimaryColumn({ type: 'bigint', name: 'Retirement123FormReportSettingID' })
  retirement123FormReportSettingID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'character varying', name: 'OrganizationCode', nullable: true })
  organizationCode: string | null;

  @Column({ type: 'character varying', name: 'OrganizationName', nullable: true })
  organizationName: string | null;

  @Column({ type: 'character varying', name: 'AdministrationSupervisor', nullable: true })
  administrationSupervisor: string | null;

  @Column({ type: 'character varying', name: 'FinancialAdministrationSupervisor', nullable: true })
  financialAdministrationSupervisor: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}