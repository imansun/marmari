import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidEmployeeFingerprint' })
export class LegacyRfidEmployeeFingerprint {
  @PrimaryColumn({ type: 'bigint', name: 'RfidEmployeeFingerprintID' })
  rfidEmployeeFingerprintID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'FingerPrint', nullable: true })
  fingerPrint: string | null;

  @Column({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}