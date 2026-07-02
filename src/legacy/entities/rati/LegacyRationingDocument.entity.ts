import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RationingDocument' })
export class LegacyRationingDocument {
  @PrimaryColumn({ type: 'bigint', name: 'RationingDocumentID' })
  rationingDocumentID: number;

  @Column({ type: 'bigint', name: 'RationingSettingRef' })
  rationingSettingRef: number;

  @Column({ type: 'integer', name: 'DocumentEntityCode' })
  documentEntityCode: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}