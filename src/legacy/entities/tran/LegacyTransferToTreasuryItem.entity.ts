import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferToTreasuryItem' })
export class LegacyTransferToTreasuryItem {
  @PrimaryColumn({ type: 'bigint', name: 'TransferToTreasuryItemID' })
  transferToTreasuryItemID: number;

  @Column({ type: 'bigint', name: 'TransferToTreasuryRef' })
  transferToTreasuryRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'DepositItemRef' })
  depositItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}