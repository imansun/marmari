import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardReportFieldInfo' })
export class LegacyCodingStandardReportFieldInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardReportFieldInfoID' })
  codingStandardReportFieldInfoID: number;

  @Column({ type: 'character varying', name: 'FieldCode' })
  fieldCode: string;

  @Column({ type: 'character varying', name: 'FieldTitleEN' })
  fieldTitleEN: string;

  @Column({ type: 'character varying', name: 'FieldTitle' })
  fieldTitle: string;

  @Column({ type: 'character varying', name: 'Nature', nullable: true })
  nature: string | null;

  @Column({ type: 'integer', name: 'ViewOrder' })
  viewOrder: number;

  @Column({ type: 'integer', name: 'MappField' })
  mappField: number;

  @Column({ type: 'character varying', name: 'DataType' })
  dataType: string;

  @Column({ type: 'bigint', name: 'CodingStandardReportInfoRef' })
  codingStandardReportInfoRef: number;

  @Column({ type: 'integer', name: 'IsAggregate' })
  isAggregate: number;

  @Column({ type: 'boolean', name: 'Attachment', nullable: true })
  attachment: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Data_Type' })
  dataType_1: number;

  @Column({ type: 'integer', name: 'Size' })
  size: number;

  @Column({ type: 'integer', name: 'Precision' })
  precision: number;

  @Column({ type: 'integer', name: 'Scale' })
  scale: number;

  @Column({ type: 'character varying', name: 'OriginalField', nullable: true })
  originalField: string | null;

  @Column({ type: 'integer', name: 'ContentType' })
  contentType: number;

}