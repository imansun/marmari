import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteReportPattern' })
export class LegacyEmployeeStatuteReportPattern {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteReportPatternID' })
  employeeStatuteReportPatternID: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number;

  @Column({ type: 'character varying', name: 'ReportFileName' })
  reportFileName: string;

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