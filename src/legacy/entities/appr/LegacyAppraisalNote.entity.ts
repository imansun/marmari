import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalNote' })
export class LegacyAppraisalNote {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalNoteID' })
  appraisalNoteID: number;

  @Column({ type: 'bigint', name: 'AppraisalFormItemActorRef' })
  appraisalFormItemActorRef: number;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'FileContent', nullable: true })
  fileContent: Buffer | null;

  @Column({ type: 'character varying', name: 'Comment', nullable: true })
  comment: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}