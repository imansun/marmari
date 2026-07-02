import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReferringFolder' })
export class LegacyReferringFolder {
  @PrimaryColumn({ type: 'bigint', name: 'ReferringFolderID' })
  referringFolderID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'ParentFolderRef', nullable: true })
  parentFolderRef: number | null;

  @Column({ type: 'bigint', name: 'CorrespondentRef' })
  correspondentRef: number;

  @Column({ type: 'bigint', name: 'OwnerCorrespondentRef', nullable: true })
  ownerCorrespondentRef: number | null;

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