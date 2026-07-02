import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PYSalaryReceipt' })
export class LegacyPYSalaryReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'PYSalaryReceiptID' })
  pYSalaryReceiptID: number;

  @Column({ type: 'bigint', name: 'MonthlyFactorDataRef' })
  monthlyFactorDataRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Bank' })
  bank: string;

  @Column({ type: 'character varying', name: 'BankNumber' })
  bankNumber: string;

  @Column({ type: 'character varying', name: 'Area' })
  area: string;

  @Column({ type: 'character varying', name: 'Employment' })
  employment: string;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'character varying', name: 'Department' })
  department: string;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}