import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MovementRecordingSendRecording' })
export class LegacyMovementRecordingSendRecording {
  @PrimaryColumn({ type: 'bigint', name: 'MovementRecordingSendRecordingID' })
  movementRecordingSendRecordingID: number;

  @Column({ type: 'bigint', name: 'MovementRecordingRef' })
  movementRecordingRef: number;

  @Column({ type: 'bigint', name: 'SendRecordingSourceRef' })
  sendRecordingSourceRef: number;

  @Column({ type: 'integer', name: 'SendRecordingType' })
  sendRecordingType: number;

  @Column({ type: 'integer', name: 'SenderType', nullable: true })
  senderType: number | null;

  @Column({ type: 'bigint', name: 'SenderRef', nullable: true })
  senderRef: number | null;

  @Column({ type: 'numeric', name: 'SendQty', nullable: true })
  sendQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}