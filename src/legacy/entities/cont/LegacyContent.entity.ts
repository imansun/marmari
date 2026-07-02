import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Content' })
export class LegacyContent {
  @PrimaryColumn({ type: 'bigint', name: 'ContentID' })
  contentID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Data' })
  data: Buffer;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'character varying', name: 'Format' })
  format: string;

  @Column({ type: 'character varying', name: 'CheckSum' })
  checkSum: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}