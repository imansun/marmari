import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentDetail' })
export class LegacyDocumentDetail {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentDetailID' })
  documentDetailID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'bigint', name: 'DocumentTemplateDetailRef', nullable: true })
  documentTemplateDetailRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}