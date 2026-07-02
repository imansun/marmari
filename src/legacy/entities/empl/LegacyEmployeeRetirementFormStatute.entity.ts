import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRetirementFormStatute' })
export class LegacyEmployeeRetirementFormStatute {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRetirementFormStatuteID' })
  employeeRetirementFormStatuteID: number;

  @Column({ type: 'bigint', name: 'EmployeeRetirementFormRef' })
  employeeRetirementFormRef: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRef' })
  employeeStatuteRef: number;

  @Column({ type: 'integer', name: 'StatuteTypeGrouping' })
  statuteTypeGrouping: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}