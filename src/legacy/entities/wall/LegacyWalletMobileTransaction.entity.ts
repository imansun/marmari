import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WalletMobileTransaction' })
export class LegacyWalletMobileTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'WalletMobileTransactionID' })
  walletMobileTransactionID: number;

  @Column({ type: 'character varying', name: 'NationalCode' })
  nationalCode: string;

  @Column({ type: 'character varying', name: 'MobileNumber' })
  mobileNumber: string;

  @Column({ type: 'bigint', name: 'WalletTransactionRef' })
  walletTransactionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}