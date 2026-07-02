import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineGatewayBank' })
export class LegacyOnlineGatewayBank {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineGatewayBankID' })
  onlineGatewayBankID: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayRef' })
  onlineGatewayRef: number;

  @Column({ type: 'character varying', name: 'GatewayBankKey' })
  gatewayBankKey: string;

  @Column({ type: 'character varying', name: 'GatewayBankName' })
  gatewayBankName: string;

  @Column({ type: 'bigint', name: 'BankRef', nullable: true })
  bankRef: number | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}