import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartBarcodeTemplate' })
export class LegacyPartBarcodeTemplate {
  @PrimaryColumn({ type: 'bigint', name: 'PartBarcodeTemplateID' })
  partBarcodeTemplateID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'BarcodeTemplateRef' })
  barcodeTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}