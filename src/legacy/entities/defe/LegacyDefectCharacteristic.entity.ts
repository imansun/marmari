import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefectCharacteristic' })
export class LegacyDefectCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'DefectCharacteristicID' })
  defectCharacteristicID: number;

  @Column({ type: 'smallint', name: 'RecordingType' })
  recordingType: number;

  @Column({ type: 'bigint', name: 'DefectRef' })
  defectRef: number;

  @Column({ type: 'bigint', name: 'CharacteristicRef' })
  characteristicRef: number;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}