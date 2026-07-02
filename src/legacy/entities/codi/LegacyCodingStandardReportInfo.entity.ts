import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardReportInfo' })
export class LegacyCodingStandardReportInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardReportInfoID' })
  codingStandardReportInfoID: number;

  @Column({ type: 'character varying', name: 'PartTitle' })
  partTitle: string;

  @Column({ type: 'character varying', name: 'PartTitle_En' })
  partTitleEn: string;

  @Column({ type: 'bigint', name: 'CodingStandardRef' })
  codingStandardRef: number;

  @Column({ type: 'character varying', name: 'ObjectName', nullable: true })
  objectName: string | null;

  @Column({ type: 'character varying', name: 'ReferenceData', nullable: true })
  referenceData: string | null;

  @Column({ type: 'boolean', name: 'Attachment', nullable: true })
  attachment: boolean | null;

  @Column({ type: 'integer', name: 'OrderView' })
  orderView: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}