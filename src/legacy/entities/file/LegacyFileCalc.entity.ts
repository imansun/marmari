import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FileCalc' })
export class LegacyFileCalc {
  @PrimaryColumn({ type: 'bigint', name: 'FileCalcID' })
  fileCalcID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'FileStructureRef' })
  fileStructureRef: number;

  @Column({ type: 'bigint', name: 'AdditionalRef', nullable: true })
  additionalRef: number | null;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ExportingMethodCode' })
  exportingMethodCode: number;

  @Column({ type: 'boolean', name: 'IsDeferredMonthsSeparated' })
  isDeferredMonthsSeparated: boolean;

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