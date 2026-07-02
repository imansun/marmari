import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DetailSetting' })
export class LegacyDetailSetting {
  @PrimaryColumn({ type: 'bigint', name: 'DetailSettingID' })
  detailSettingID: number;

  @Column({ type: 'integer', name: 'ReportType' })
  reportType: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'character varying', name: 'ReportTitle' })
  reportTitle: string;

  @Column({ type: 'character varying', name: 'ReportingPeriodFormat' })
  reportingPeriodFormat: string;

  @Column({ type: 'integer', name: 'Orientation' })
  orientation: number;

  @Column({ type: 'boolean', name: 'SeperateAmountByTotalType' })
  seperateAmountByTotalType: boolean;

  @Column({ type: 'boolean', name: 'SeperateAmountByColumnType' })
  seperateAmountByColumnType: boolean;

  @Column({ type: 'boolean', name: 'SeperateTitleByColumnType' })
  seperateTitleByColumnType: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}