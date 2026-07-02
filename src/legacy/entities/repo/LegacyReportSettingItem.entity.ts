import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportSettingItem' })
export class LegacyReportSettingItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReportSettingItemID' })
  reportSettingItemID: number;

  @Column({ type: 'bigint', name: 'ReportSettingRef' })
  reportSettingRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Name', nullable: true })
  name: string | null;

  @Column({ type: 'integer', name: 'FactorType', default: 1 })
  factorType: number;

  @Column({ type: 'integer', name: 'Extra', nullable: true })
  extra: number | null;

}