import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefectRecordingCharacteristic' })
export class LegacyDefectRecordingCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'DefectRecordingCharacteristicID' })
  defectRecordingCharacteristicID: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DefectRecordingRef' })
  defectRecordingRef: number;

  @Column({ type: 'bigint', name: 'DefectCharacteristicRef' })
  defectCharacteristicRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}