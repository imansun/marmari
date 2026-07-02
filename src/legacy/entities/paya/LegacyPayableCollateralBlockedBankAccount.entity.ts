import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PayableCollateralBlockedBankAccount' })
export class LegacyPayableCollateralBlockedBankAccount {
  @PrimaryColumn({ type: 'bigint', name: 'PayableCollateralBlockedBankAccountID' })
  payableCollateralBlockedBankAccountID: number;

  @Column({ type: 'bigint', name: 'PayableCollateralRef' })
  payableCollateralRef: number;

  @Column({ type: 'bigint', name: 'BankAccountRef' })
  bankAccountRef: number;

  @Column({ type: 'numeric', name: 'BlockedAmount' })
  blockedAmount: number;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}