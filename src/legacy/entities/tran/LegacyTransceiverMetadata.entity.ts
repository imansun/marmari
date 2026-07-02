import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransceiverMetadata' })
export class LegacyTransceiverMetadata {
  @PrimaryColumn({ type: 'bigint', name: 'TransceiverMetadataID' })
  transceiverMetadataID: number;

  @Column({ type: 'bigint', name: 'ReferringFolderRef', nullable: true })
  referringFolderRef: number | null;

  @Column({ type: 'bigint', name: 'ReferringTransceiverRef', nullable: true })
  referringTransceiverRef: number | null;

  @Column({ type: 'character varying', name: 'Note', nullable: true })
  note: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SeenDate', nullable: true })
  seenDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'TerminationDate', nullable: true })
  terminationDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}