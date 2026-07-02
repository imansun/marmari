import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WalletProvider' })
export class LegacyWalletProvider {
  @PrimaryColumn({ type: 'bigint', name: 'WalletProviderID' })
  walletProviderID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'BaseUrl', nullable: true })
  baseUrl: string | null;

  @Column({ type: 'character varying', name: 'UserName', nullable: true })
  userName: string | null;

  @Column({ type: 'character varying', name: 'Password', nullable: true })
  password: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'integer', name: 'DefaultValidationType' })
  defaultValidationType: number;

  @Column({ type: 'character varying', name: 'MerchantID', nullable: true })
  merchantID: string | null;

  @Column({ type: 'character varying', name: 'TerminalID', nullable: true })
  terminalID: string | null;

}