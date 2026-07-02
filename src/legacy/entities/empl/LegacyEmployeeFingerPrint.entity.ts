import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeFingerPrint' })
export class LegacyEmployeeFingerPrint {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeFingerPrintID' })
  employeeFingerPrintID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'FingerPrint', nullable: true })
  fingerPrint: string | null;

  @Column({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}