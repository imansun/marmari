import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Post' })
export class LegacyPost {
  @PrimaryColumn({ type: 'bigint', name: 'PostID' })
  postID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'LevelCode', nullable: true })
  levelCode: number | null;

  @Column({ type: 'integer', name: 'ManagementLevelCode', nullable: true })
  managementLevelCode: number | null;

  @Column({ type: 'integer', name: 'TypeCode', nullable: true })
  typeCode: number | null;

  @Column({ type: 'integer', name: 'OccupationStatusCode', nullable: true })
  occupationStatusCode: number | null;

  @Column({ type: 'integer', name: 'RegionalDivisionTypeCode', nullable: true })
  regionalDivisionTypeCode: number | null;

  @Column({ type: 'integer', name: 'Capacity', nullable: true })
  capacity: number | null;

  @Column({ type: 'integer', name: 'MaxOccupationDuration', nullable: true })
  maxOccupationDuration: number | null;

  @Column({ type: 'character varying', name: 'Qualification', nullable: true })
  qualification: string | null;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'timestamp without time zone', name: 'StatusChangeDate', nullable: true })
  statusChangeDate: Date | null;

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

  @Column({ type: 'character varying', name: 'UniqueCode', nullable: true })
  uniqueCode: string | null;

  @Column({ type: 'bigint', name: 'RegionalDivisionRef', nullable: true })
  regionalDivisionRef: number | null;

  @Column({ type: 'integer', name: 'Extra1Code', nullable: true })
  extra1Code: number | null;

  @Column({ type: 'integer', name: 'Extra2Code', nullable: true })
  extra2Code: number | null;

  @Column({ type: 'integer', name: 'Extra3Code', nullable: true })
  extra3Code: number | null;

  @Column({ type: 'integer', name: 'Extra4Code', nullable: true })
  extra4Code: number | null;

  @Column({ type: 'integer', name: 'Extra5Code', nullable: true })
  extra5Code: number | null;

  @Column({ type: 'character varying', name: 'AbbrName', nullable: true })
  abbrName: string | null;

  @Column({ type: 'character varying', name: 'FormalName', nullable: true })
  formalName: string | null;

}