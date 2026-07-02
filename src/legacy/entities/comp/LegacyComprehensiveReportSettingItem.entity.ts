import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ComprehensiveReportSettingItem' })
export class LegacyComprehensiveReportSettingItem {
  @PrimaryColumn({ type: 'bigint', name: 'ComprehensiveReportSettingItemID' })
  comprehensiveReportSettingItemID: number;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'ColumnName' })
  columnName: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bigint', name: 'ComprehensiveReportSettingRef' })
  comprehensiveReportSettingRef: number;

  @Column({ type: 'bigint', name: 'RelatedEntityRef', nullable: true })
  relatedEntityRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}