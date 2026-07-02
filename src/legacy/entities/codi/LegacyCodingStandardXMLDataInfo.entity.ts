import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardXMLDataInfo' })
export class LegacyCodingStandardXMLDataInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardXMLDataInfoID' })
  codingStandardXMLDataInfoID: number;

  @Column({ type: 'bigint', name: 'CodingStandardXMLInfoRef' })
  codingStandardXMLInfoRef: number;

  @Column({ type: 'character varying', name: 'AttributeName' })
  attributeName: string;

  @Column({ type: 'character varying', name: 'ReportFieldInfoRef' })
  reportFieldInfoRef: string;

  @Column({ type: 'boolean', name: 'ShowWithoutValue' })
  showWithoutValue: boolean;

  @Column({ type: 'character varying', name: 'EmptyValue', nullable: true })
  emptyValue: string | null;

  @Column({ type: 'integer', name: 'AttributeOrder' })
  attributeOrder: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}