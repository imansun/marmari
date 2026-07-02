import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'd1' })
export class LegacyD1 {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number | null;

  @PrimaryColumn({ type: 'double precision', name: 'Code' })
  code: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'DepartmentID' })
  departmentID: number | null;

}