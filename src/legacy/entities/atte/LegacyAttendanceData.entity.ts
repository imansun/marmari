import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceData' })
export class LegacyAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataID' })
  attendanceDataID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'AttendanceDateTime' })
  attendanceDateTime: Date;

  @Column({ type: 'boolean', name: 'Entrance', nullable: true })
  entrance: boolean | null;

  @Column({ type: 'bigint', name: 'AttendanceStatusRef' })
  attendanceStatusRef: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'integer', name: 'RfidSiteCode', nullable: true })
  rfidSiteCode: number | null;

  @Column({ type: 'integer', name: 'RfidGateCode', nullable: true })
  rfidGateCode: number | null;

  @Column({ type: 'bigint', name: 'RemoteLogID', nullable: true })
  remoteLogID: number | null;

  @Column({ type: 'bigint', name: 'AttendanceDataCorrectionRequestRef', nullable: true })
  attendanceDataCorrectionRequestRef: number | null;

  @Column({ type: 'character varying', name: 'FunctionKey', nullable: true })
  functionKey: string | null;

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

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsCalculationResult', default: false })
  isCalculationResult: boolean;

}