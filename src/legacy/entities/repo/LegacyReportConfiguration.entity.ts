import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportConfiguration' })
export class LegacyReportConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'ReportConfigurationID' })
  reportConfigurationID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CalcGroups' })
  calcGroups: number;

  @Column({ type: 'boolean', name: 'CompensationVisible' })
  compensationVisible: boolean;

  @Column({ type: 'boolean', name: 'AttendanceVisible' })
  attendanceVisible: boolean;

  @Column({ type: 'boolean', name: 'UserLevel' })
  userLevel: boolean;

  @Column({ type: 'integer', name: 'AssignTypes' })
  assignTypes: number;

  @Column({ type: 'integer', name: 'Categories' })
  categories: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}