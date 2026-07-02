import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefectRecording' })
export class LegacyDefectRecording {
  @PrimaryColumn({ type: 'bigint', name: 'DefectRecordingID' })
  defectRecordingID: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'integer', name: 'ScopeEntityCode', nullable: true })
  scopeEntityCode: number | null;

  @Column({ type: 'bigint', name: 'ScopeEntityRef', nullable: true })
  scopeEntityRef: number | null;

  @Column({ type: 'character varying', name: 'ScopeEntityText', nullable: true })
  scopeEntityText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'DefectQuantity' })
  defectQuantity: number;

  @Column({ type: 'integer', name: 'DefectSeverity', nullable: true })
  defectSeverity: number | null;

  @Column({ type: 'integer', name: 'DefectOccurrenceLocation', nullable: true })
  defectOccurrenceLocation: number | null;

  @Column({ type: 'bigint', name: 'DefectRef' })
  defectRef: number;

}