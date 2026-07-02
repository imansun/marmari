import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SnappPayTransactionDetail' })
export class LegacySnappPayTransactionDetail {
  @PrimaryColumn({ type: 'bigint', name: 'SnappPayTransactionDetailID' })
  snappPayTransactionDetailID: number;

  @Column({ type: 'bigint', name: 'WalletTransactionRef' })
  walletTransactionRef: number;

  @Column({ type: 'character varying', name: 'BranchCode' })
  branchCode: string;

  @Column({ type: 'character varying', name: 'TerminalID' })
  terminalID: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}