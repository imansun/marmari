import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportingStyle' })
export class LegacyReportingStyle {
  @PrimaryColumn({ type: 'bigint', name: 'ReportingStyleID' })
  reportingStyleID: number;

  @Column({ type: 'integer', name: 'CategoryType' })
  categoryType: number;

  @Column({ type: 'integer', name: 'ReportType', nullable: true })
  reportType: number | null;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'character varying', name: 'FontName' })
  fontName: string;

  @Column({ type: 'integer', name: 'FontSize' })
  fontSize: number;

  @Column({ type: 'character varying', name: 'FontColor' })
  fontColor: string;

  @Column({ type: 'character varying', name: 'BackGroundColor', nullable: true })
  backGroundColor: string | null;

  @Column({ type: 'boolean', name: 'IsBold' })
  isBold: boolean;

  @Column({ type: 'boolean', name: 'IsItalic' })
  isItalic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}