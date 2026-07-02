import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailShop' })
export class LegacyRetailShop {
  @PrimaryColumn({ type: 'bigint', name: 'RetailShopID' })
  retailShopID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'RetailZoneRef', nullable: true })
  retailZoneRef: number | null;

  @Column({ type: 'integer', name: 'RetailShopType' })
  retailShopType: number;

  @Column({ type: 'numeric', name: 'ShopArea', nullable: true })
  shopArea: number | null;

  @Column({ type: 'integer', name: 'OpeningTime', nullable: true })
  openingTime: number | null;

  @Column({ type: 'integer', name: 'ClosingTime', nullable: true })
  closingTime: number | null;

  @Column({ type: 'boolean', name: 'CloseAfterMidnight' })
  closeAfterMidnight: boolean;

  @Column({ type: 'integer', name: 'ValidSettlementInterval', nullable: true })
  validSettlementInterval: number | null;

  @Column({ type: 'integer', name: 'ValidPerformanceSummaryInterval', nullable: true })
  validPerformanceSummaryInterval: number | null;

  @Column({ type: 'boolean', name: 'PeriodicalControl', default: false })
  periodicalControl: boolean;

  @Column({ type: 'boolean', name: 'DailyControl', default: true })
  dailyControl: boolean;

  @Column({ type: 'integer', name: 'DailyControlToHour', nullable: true })
  dailyControlToHour: number | null;

  @Column({ type: 'integer', name: 'SuspendedSessionValidityDay', nullable: true })
  suspendedSessionValidityDay: number | null;

  @Column({ type: 'integer', name: 'SuspendedSessionValidityHour', nullable: true })
  suspendedSessionValidityHour: number | null;

  @Column({ type: 'integer', name: 'SuspendedSessionValidityMinute', nullable: true })
  suspendedSessionValidityMinute: number | null;

  @Column({ type: 'integer', name: 'SettlingSessionValidityDay', nullable: true })
  settlingSessionValidityDay: number | null;

  @Column({ type: 'integer', name: 'SettlingSessionValidityMinute', nullable: true })
  settlingSessionValidityMinute: number | null;

  @Column({ type: 'integer', name: 'SettlingSessionValidityHour', nullable: true })
  settlingSessionValidityHour: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}