import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'acc1' })
export class LegacyAcc1 {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number | null;

  @PrimaryColumn({ type: 'character varying' })
  sh: string | null;

}