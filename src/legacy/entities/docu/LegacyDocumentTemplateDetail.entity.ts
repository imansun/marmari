import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentTemplateDetail' })
export class LegacyDocumentTemplateDetail {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentTemplateDetailID' })
  documentTemplateDetailID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'DocumentTemplateRef' })
  documentTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}