import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferToPublicIncomItem' })
export class LegacyTransferToPublicIncomItem {
  @PrimaryColumn({ type: 'bigint', name: 'TransferToPublicIncomItemID' })
  transferToPublicIncomItemID: number;

  @Column({ type: 'bigint', name: 'TransferToPublicIncomRef' })
  transferToPublicIncomRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'DepositItemRef' })
  depositItemRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}