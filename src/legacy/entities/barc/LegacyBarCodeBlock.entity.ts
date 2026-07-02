import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BarCodeBlock' })
export class LegacyBarCodeBlock {
  @PrimaryColumn({ type: 'bigint', name: 'BarCodeBlockID' })
  barCodeBlockID: number;

  @Column({ type: 'bigint', name: 'BarcodeTemplateRef' })
  barcodeTemplateRef: number;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'integer', name: 'Length' })
  length: number;

  @Column({ type: 'integer', name: 'BarCodeBlockType' })
  barCodeBlockType: number;

  @Column({ type: 'integer', name: 'PartSpecificationType', nullable: true })
  partSpecificationType: number | null;

  @Column({ type: 'bigint', name: 'SpecificationRef', nullable: true })
  specificationRef: number | null;

  @Column({ type: 'integer', name: 'DescriptiveValueType', nullable: true })
  descriptiveValueType: number | null;

  @Column({ type: 'character varying', name: 'RegularExperssion' })
  regularExperssion: string;

  @Column({ type: 'character varying', name: 'DescriptiveValue', nullable: true })
  descriptiveValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}