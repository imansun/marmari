import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountDebitCreditStatement' })
export class LegacyAccountDebitCreditStatement {
  @PrimaryColumn({ type: 'bigint', name: 'AccountDebitCreditStatementID' })
  accountDebitCreditStatementID: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StatementDate' })
  statementDate: Date;

  @Column({ type: 'integer', name: 'EntityStructureReferenceType', nullable: true })
  entityStructureReferenceType: number | null;

  @Column({ type: 'bigint', name: 'EntityStructureReferenceRef', nullable: true })
  entityStructureReferenceRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

}