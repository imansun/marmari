import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorBankAccountUser' })
export class LegacyOnlinePaymentSimulatorBankAccountUser {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorBankAccountUserID' })
  onlinePaymentSimulatorBankAccountUserID: number;

  @Column({ type: 'bigint', name: 'OnlinePaymentSimulatorBankAccountRef' })
  onlinePaymentSimulatorBankAccountRef: number;

  @Column({ type: 'bigint', name: 'OnlinePaymentSimulatorUserRef' })
  onlinePaymentSimulatorUserRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}