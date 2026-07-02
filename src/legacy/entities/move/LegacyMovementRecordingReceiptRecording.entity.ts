import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingReceiptRecording' })
export class LegacyMovementRecordingReceiptRecording {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingReceiptRecordingID' })
  movementRecordingReceiptRecordingID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRecordingSourceRef' })
  receiptRecordingSourceRef: number;

  @Column({ type: 'integer', name: 'ReceiptRecordingType' })
  receiptRecordingType: number;

  @Column({ type: 'integer', name: 'ReceiverType', nullable: true })
  receiverType: number | null;

  @Column({ type: 'bigint', name: 'ReceiverRef', nullable: true })
  receiverRef: number | null;

  @Column({ type: 'numeric', name: 'ReceiptQty', nullable: true })
  receiptQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}