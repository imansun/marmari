import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherSpecificationSLLoan' })
export class LegacyVoucherSpecificationSLLoan {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherSpecificationSLLoanID' })
  voucherSpecificationSLLoanID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationSLRef' })
  voucherSpecificationSLRef: number;

  @Column({ type: 'bigint', name: 'LoanTypeRef' })
  loanTypeRef: number;

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