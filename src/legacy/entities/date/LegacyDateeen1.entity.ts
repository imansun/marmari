import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'dateeen1' })
export class LegacyDateeen1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number | null;

  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  dateen: string | null;

  @PrimaryColumn({ type: 'date' })
  employeedate: Date | null;

}