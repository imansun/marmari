import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResultRecordingCharacteristicSampleValue' })
export class LegacyResultRecordingCharacteristicSampleValue {
  @PrimaryColumn({ type: 'bigint', name: 'ResultRecordingCharacteristicSampleValueID' })
  resultRecordingCharacteristicSampleValueID: number;

  @Column({ type: 'integer', name: 'SampleNumber' })
  sampleNumber: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'integer', name: 'InferredState', nullable: true })
  inferredState: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ResultRecordingCharacteristicSampleRef' })
  resultRecordingCharacteristicSampleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}