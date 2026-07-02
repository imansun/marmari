import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PersonalFileForm' })
export class LegacyPersonalFileForm {
  @PrimaryColumn({ type: 'bigint', name: 'PersonalFileFormID' })
  personalFileFormID: number;

  @Column({ type: 'bigint', name: 'PersonalFileRef' })
  personalFileRef: number;

  @Column({ type: 'bigint', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'character varying', name: 'ComponentName', nullable: true })
  componentName: string | null;

  @Column({ type: 'character varying', name: 'EntityName', nullable: true })
  entityName: string | null;

  @Column({ type: 'character varying', name: 'EntityTitle', nullable: true })
  entityTitle: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}