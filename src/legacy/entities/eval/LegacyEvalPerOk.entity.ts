import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EvalPerOk' })
export class LegacyEvalPerOk {
  @PrimaryColumn({ type: 'bigint', name: 'EvalPerOkID' })
  evalPerOkID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'EmployeePersonnelCodeRef', nullable: true })
  employeePersonnelCodeRef: number | null;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'bigint', name: 'AttendantRef', nullable: true })
  attendantRef: number | null;

  @Column({ type: 'bigint', name: 'No2EmployeePersonnelCodeRef', nullable: true })
  no2EmployeePersonnelCodeRef: number | null;

  @Column({ type: 'bigint', name: 'ManagerRef', nullable: true })
  managerRef: number | null;

  @Column({ type: 'bigint', name: 'HumanRef', nullable: true })
  humanRef: number | null;

  @Column({ type: 'bigint', name: 'CompanyFactorManagerRef', nullable: true })
  companyFactorManagerRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}