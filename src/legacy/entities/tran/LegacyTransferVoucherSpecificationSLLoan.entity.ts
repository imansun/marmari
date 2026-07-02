import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferVoucherSpecificationSLLoan' })
export class LegacyTransferVoucherSpecificationSLLoan {
  @PrimaryColumn({ type: 'bigint', name: 'TransferVoucherSpecificationSLLoanID' })
  transferVoucherSpecificationSLLoanID: number;

  @Column({ type: 'bigint', name: 'TransferVoucherSpecificationSLRef' })
  transferVoucherSpecificationSLRef: number;

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