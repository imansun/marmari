import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementFormWarriorRecord' })
export class LegacyEmployeeRetirementFormWarriorRecord {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementFormWarriorRecordID' })
  employeeRetirementFormWarriorRecordID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'bigint', name: 'EmployeeWarriorRecordRef' })
  employeeWarriorRecordRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}