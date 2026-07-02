import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalCashTransfer' })
export class LegacyInternalCashTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'InternalCashTransferID' })
  internalCashTransferID: number;

  @Column({ type: 'bigint', name: 'InternalTransferDocumentRef' })
  internalTransferDocumentRef: number;

  @Column({ type: 'bigint', name: 'DestinationSessionRef' })
  destinationSessionRef: number;

  @Column({ type: 'numeric', name: 'TransferedPrice' })
  transferedPrice: number;

  @Column({ type: 'bigint', name: 'OriginSessionRef', nullable: true })
  originSessionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}