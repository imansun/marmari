import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteTempPost' })
export class LegacyEmployeeStatuteTempPost {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteTempPostID' })
  employeeStatuteTempPostID: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRef' })
  employeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'PostRef' })
  postRef: number;

  @Column({ type: 'bigint', name: 'DepartmentRef' })
  departmentRef: number;

  @Column({ type: 'numeric', name: 'SupervisionPercent', nullable: true })
  supervisionPercent: number | null;

  @Column({ type: 'numeric', name: 'WorkDifficultyPercent', nullable: true })
  workDifficultyPercent: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}