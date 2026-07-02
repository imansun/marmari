import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoanType' })
export class LegacyLoanType {
  @PrimaryColumn({ type: 'bigint', name: 'LoanTypeID' })
  loanTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'numeric', name: 'MaxAmount' })
  maxAmount: number;

  @Column({ type: 'numeric', name: 'InstallmentAmount' })
  installmentAmount: number;

  @Column({ type: 'boolean', name: 'Cumulative' })
  cumulative: boolean;

  @Column({ type: 'boolean', name: 'VisibleInForm' })
  visibleInForm: boolean;

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