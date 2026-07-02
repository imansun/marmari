import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeAppraiserItem' })
export class LegacyEmployeeAppraiserItem {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeAppraiserItemID' })
  employeeAppraiserItemID: number;

  @Column({ type: 'bigint', name: 'EmployeeAppraiserRef' })
  employeeAppraiserRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}