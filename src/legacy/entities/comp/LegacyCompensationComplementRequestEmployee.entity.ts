import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationComplementRequestEmployee' })
export class LegacyCompensationComplementRequestEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationComplementRequestEmployeeID' })
  compensationComplementRequestEmployeeID: number;

  @Column({ type: 'bigint', name: 'CompensationComplementRequestRef' })
  compensationComplementRequestRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}