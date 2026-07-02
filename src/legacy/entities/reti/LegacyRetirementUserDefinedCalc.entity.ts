import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetirementUserDefinedCalc' })
export class LegacyRetirementUserDefinedCalc {
  @PrimaryColumn({ type: 'bigint', name: 'RetirementUserDefinedCalcID' })
  retirementUserDefinedCalcID: number;

  @Column({ type: 'bigint', name: 'CompensationCalcTypeRef' })
  compensationCalcTypeRef: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'RelativeRef', nullable: true })
  relativeRef: number | null;

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