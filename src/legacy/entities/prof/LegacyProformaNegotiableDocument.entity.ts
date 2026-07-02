import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaNegotiableDocument' })
export class LegacyProformaNegotiableDocument {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaNegotiableDocumentID' })
  proformaNegotiableDocumentID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsDefinedExternally' })
  isDefinedExternally: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}