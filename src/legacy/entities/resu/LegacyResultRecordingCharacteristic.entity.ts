import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResultRecordingCharacteristic' })
export class LegacyResultRecordingCharacteristic {
  @PrimaryColumn({ type: 'bigint', name: 'ResultRecordingCharacteristicID' })
  resultRecordingCharacteristicID: number;

  @Column({ type: 'bigint', name: 'ResultRecordingRef' })
  resultRecordingRef: number;

  @Column({ type: 'bigint', name: 'InspectionLotOperationCharacteristicRef' })
  inspectionLotOperationCharacteristicRef: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'integer', name: 'InferredState', nullable: true })
  inferredState: number | null;

  @Column({ type: 'integer', name: 'State', nullable: true })
  state: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InspectionStartDate', nullable: true })
  inspectionStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InspectionEndDate', nullable: true })
  inspectionEndDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'InspectorRef', nullable: true })
  inspectorRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'VerificationLevel', nullable: true })
  verificationLevel: number | null;

  @Column({ type: 'integer', name: 'NextInspectionType', nullable: true })
  nextInspectionType: number | null;

}