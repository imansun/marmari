import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DisketteItem' })
export class LegacyDisketteItem {
  @PrimaryColumn({ type: 'bigint', name: 'DisketteItemID' })
  disketteItemID: number;

  @Column({ type: 'bigint', name: 'DisketteRef' })
  disketteRef: number;

  @Column({ type: 'bigint', name: 'TransactionHeaderRef' })
  transactionHeaderRef: number;

  @Column({ type: 'integer', name: 'AssetTransactionType' })
  assetTransactionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}