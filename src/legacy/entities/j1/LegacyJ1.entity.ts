import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'j1' })
export class LegacyJ1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number | null;

  @PrimaryColumn({ type: 'double precision' })
  jobcode: string | null;

  @PrimaryColumn({ type: 'bigint' })
  jobid: number | null;

}