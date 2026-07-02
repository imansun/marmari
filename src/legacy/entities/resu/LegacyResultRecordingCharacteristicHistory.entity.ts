import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ResultRecordingCharacteristicHistory' })
export class LegacyResultRecordingCharacteristicHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ResultRecordingCharacteristicHistoryID' })
  resultRecordingCharacteristicHistoryID: number;

  @Column({ type: 'bigint', name: 'ResultRecordingCharacteristicRef' })
  resultRecordingCharacteristicRef: number;

  @Column({ type: 'bigint', name: 'InspectorRef', nullable: true })
  inspectorRef: number | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'integer', name: 'State', nullable: true })
  state: number | null;

  @Column({ type: 'timestamp without time zone', name: 'InspectionStartDate', nullable: true })
  inspectionStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InspectionEndDate', nullable: true })
  inspectionEndDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}