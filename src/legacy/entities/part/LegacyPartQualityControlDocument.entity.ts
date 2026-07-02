import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQualityControlDocument' })
export class LegacyPartQualityControlDocument {
  @PrimaryColumn({ type: 'bigint', name: 'PartQualityControlDocumentID' })
  partQualityControlDocumentID: number;

  @Column({ type: 'bigint', name: 'PartQualityControlRef' })
  partQualityControlRef: number;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'smallint', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}