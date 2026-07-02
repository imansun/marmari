import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeePaymentLocation' })
export class LegacyEmployeePaymentLocation {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeePaymentLocationID' })
  employeePaymentLocationID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'TypeCode' })
  typeCode: number;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bigint', name: 'CashRef', nullable: true })
  cashRef: number | null;

  @Column({ type: 'bigint', name: 'BankBranchRef', nullable: true })
  bankBranchRef: number | null;

  @Column({ type: 'bigint', name: 'BankAccountTypeRef', nullable: true })
  bankAccountTypeRef: number | null;

  @Column({ type: 'bigint', name: 'CompensationFactorRef', nullable: true })
  compensationFactorRef: number | null;

  @Column({ type: 'character varying', name: 'AccountNumber', nullable: true })
  accountNumber: string | null;

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'character varying', name: 'Sheba', nullable: true })
  sheba: string | null;

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

  @Column({ type: 'bigint', name: 'PartyBankAccountRef', nullable: true })
  partyBankAccountRef: number | null;

  @Column({ type: 'boolean', name: 'IsRetirement', default: false })
  isRetirement: boolean;

}