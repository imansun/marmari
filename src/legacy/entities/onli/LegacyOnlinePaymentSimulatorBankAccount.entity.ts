import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorBankAccount' })
export class LegacyOnlinePaymentSimulatorBankAccount {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorBankAccountID' })
  onlinePaymentSimulatorBankAccountID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'BankCode', nullable: true })
  bankCode: string | null;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'IBAN' })
  iBAN: string;

  @Column({ type: 'numeric', name: 'SavedAmount' })
  savedAmount: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}