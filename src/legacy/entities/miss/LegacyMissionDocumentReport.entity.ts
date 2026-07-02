import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MissionDocumentReport' })
export class LegacyMissionDocumentReport {
  @PrimaryColumn({ type: 'bigint', name: 'MissionDocumentReportID' })
  missionDocumentReportID: number;

  @Column({ type: 'bigint', name: 'MissionDocumentRef' })
  missionDocumentRef: number;

  @Column({ type: 'character varying', name: 'FileName' })
  fileName: string;

  @Column({ type: 'bytea', name: 'FileContents' })
  fileContents: Buffer;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}