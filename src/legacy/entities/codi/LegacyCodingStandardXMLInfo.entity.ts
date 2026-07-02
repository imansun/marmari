import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardXMLInfo' })
export class LegacyCodingStandardXMLInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardXMLInfoID' })
  codingStandardXMLInfoID: number;

  @Column({ type: 'bigint', name: 'CodingStandardRef' })
  codingStandardRef: number;

  @Column({ type: 'character varying', name: 'XmlElementType' })
  xmlElementType: string;

  @Column({ type: 'character varying', name: 'XmlElementTitle' })
  xmlElementTitle: string;

  @Column({ type: 'bigint', name: 'XmlElementParent', nullable: true })
  xmlElementParent: number | null;

  @Column({ type: 'character varying', name: 'XmlElementKey', nullable: true })
  xmlElementKey: string | null;

  @Column({ type: 'integer', name: 'XmlOrder' })
  xmlOrder: number;

  @Column({ type: 'character varying', name: 'ReferenceData' })
  referenceData: string;

  @Column({ type: 'character varying', name: 'ReportInfoRef' })
  reportInfoRef: string;

  @Column({ type: 'boolean', name: 'IsAggregate' })
  isAggregate: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}