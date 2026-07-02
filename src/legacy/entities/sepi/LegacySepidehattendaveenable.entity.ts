import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sepidehattendaveenable' })
export class LegacySepidehattendaveenable {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataID' })
  attendanceDataID: number;

  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'AttendanceDateTime' })
  attendanceDateTime: Date;

  @PrimaryColumn({ type: 'boolean', name: 'Entrance' })
  entrance: boolean | null;

  @PrimaryColumn({ type: 'bigint', name: 'AttendanceStatusRef' })
  attendanceStatusRef: number;

  @PrimaryColumn({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @PrimaryColumn({ type: 'integer', name: 'RfidSiteCode' })
  rfidSiteCode: number | null;

  @PrimaryColumn({ type: 'integer', name: 'RfidGateCode' })
  rfidGateCode: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'RemoteLogID' })
  remoteLogID: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'AttendanceDataCorrectionRequestRef' })
  attendanceDataCorrectionRequestRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'FunctionKey' })
  functionKey: string | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

}