import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PersonalFolder' })
export class LegacyPersonalFolder {
  @PrimaryColumn({ type: 'bigint', name: 'PersonalFolderID' })
  personalFolderID: number;

  @Column({ type: 'bigint', name: 'PersonRef' })
  personRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'CategoryType' })
  categoryType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}