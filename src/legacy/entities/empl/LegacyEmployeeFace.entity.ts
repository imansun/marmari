import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeFace' })
export class LegacyEmployeeFace {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeFaceID' })
  employeeFaceID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'Face', nullable: true })
  face: string | null;

  @Column({ type: 'character varying', name: 'DeviceType' })
  deviceType: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}