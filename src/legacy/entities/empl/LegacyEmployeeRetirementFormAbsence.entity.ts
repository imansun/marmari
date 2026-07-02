import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementFormAbsence' })
export class LegacyEmployeeRetirementFormAbsence {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementFormAbsenceID' })
  employeeRetirementFormAbsenceID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate' })
  toDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}