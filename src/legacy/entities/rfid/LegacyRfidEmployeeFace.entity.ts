import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidEmployeeFace' })
export class LegacyRfidEmployeeFace {
  @PrimaryColumn({ type: 'bigint', name: 'RfidEmployeeFaceID' })
  rfidEmployeeFaceID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'Face', nullable: true })
  face: string | null;

  @Column({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}