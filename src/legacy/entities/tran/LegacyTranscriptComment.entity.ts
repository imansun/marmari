import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TranscriptComment' })
export class LegacyTranscriptComment {
  @PrimaryColumn({ type: 'bigint', name: 'TranscriptCommentID' })
  transcriptCommentID: number;

  @Column({ type: 'character varying', name: 'Text' })
  text: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'PeriodRef' })
  periodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}