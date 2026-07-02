import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementFormWorkRecord' })
export class LegacyEmployeeRetirementFormWorkRecord {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementFormWorkRecordID' })
  employeeRetirementFormWorkRecordID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'bigint', name: 'EmployeeWorkRecordRef' })
  employeeWorkRecordRef: number;

  @Column({ type: 'integer', name: 'StatuteTypeGrouping' })
  statuteTypeGrouping: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}