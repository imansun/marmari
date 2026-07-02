import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PersonalFile' })
export class LegacyPersonalFile {
  @PrimaryColumn({ type: 'bigint', name: 'PersonalFileID' })
  personalFileID: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'RootRef' })
  rootRef: number;

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