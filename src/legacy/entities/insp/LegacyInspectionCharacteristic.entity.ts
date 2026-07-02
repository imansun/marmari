import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionCharacteristic' })
export class LegacyInspectionCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionCharacteristicID' })
  inspectionCharacteristicID: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'boolean', name: 'IsEditableByUser' })
  isEditableByUser: boolean;

  @Column({ type: 'smallint', name: 'RecordingType' })
  recordingType: number;

  @Column({ type: 'smallint', name: 'DefectRecordingType' })
  defectRecordingType: number;

  @Column({ type: 'boolean', name: 'QuantityBasedDefectRecording' })
  quantityBasedDefectRecording: boolean;

  @Column({ type: 'boolean', name: 'LongTermCharacteristic' })
  longTermCharacteristic: boolean;

  @Column({ type: 'integer', name: 'ImportanceLevel', nullable: true })
  importanceLevel: number | null;

  @Column({ type: 'integer', name: 'Category', nullable: true })
  category: number | null;

  @Column({ type: 'boolean', name: 'HasSamplingProcedure' })
  hasSamplingProcedure: boolean;

  @Column({ type: 'integer', name: 'SamplingResultRecordingMethod', nullable: true })
  samplingResultRecordingMethod: number | null;

  @Column({ type: 'integer', name: 'SamplingResultRecordingScope', nullable: true })
  samplingResultRecordingScope: number | null;

  @Column({ type: 'boolean', name: 'HasNeededToAdditiveSample' })
  hasNeededToAdditiveSample: boolean;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}