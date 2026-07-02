import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ArchiveShard' })
export class LegacyArchiveShard {
  @PrimaryColumn({ type: 'bigint', name: 'ArchiveShardID' })
  archiveShardID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'DataSource' })
  dataSource: string;

  @Column({ type: 'character varying', name: 'InitialCatalog' })
  initialCatalog: string;

  @Column({ type: 'character varying', name: 'UserID' })
  userID: string;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier', default: 0 })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}