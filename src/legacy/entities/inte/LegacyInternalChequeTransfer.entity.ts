import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalChequeTransfer' })
export class LegacyInternalChequeTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'InternalChequeTransferID' })
  internalChequeTransferID: number;

  @Column({ type: 'bigint', name: 'InternalTransferDocumentRef' })
  internalTransferDocumentRef: number;

  @Column({ type: 'bigint', name: 'DestinationSessionRef' })
  destinationSessionRef: number;

  @Column({ type: 'bigint', name: 'ChequeRef' })
  chequeRef: number;

  @Column({ type: 'bigint', name: 'OriginSessionRef', nullable: true })
  originSessionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}