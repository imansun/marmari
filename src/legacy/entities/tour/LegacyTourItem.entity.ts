import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourItem' })
export class LegacyTourItem {
  @PrimaryColumn({ type: 'bigint', name: 'TourItemID' })
  tourItemID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'CustomerAddressRef', nullable: true })
  customerAddressRef: number | null;

  @Column({ type: 'boolean', name: 'HasDistribution' })
  hasDistribution: boolean;

  @Column({ type: 'boolean', name: 'HasReturn' })
  hasReturn: boolean;

  @Column({ type: 'boolean', name: 'HasCollection' })
  hasCollection: boolean;

  @Column({ type: 'boolean', name: 'HasHotSales' })
  hasHotSales: boolean;

  @Column({ type: 'boolean', name: 'HasOrderTaking' })
  hasOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'HasSurvey' })
  hasSurvey: boolean;

  @Column({ type: 'boolean', name: 'IsOrderTakingNonscheduled' })
  isOrderTakingNonscheduled: boolean;

  @Column({ type: 'boolean', name: 'IsHotSalesNonscheduled' })
  isHotSalesNonscheduled: boolean;

  @Column({ type: 'boolean', name: 'IsCollectionNonscheduled' })
  isCollectionNonscheduled: boolean;

  @Column({ type: 'boolean', name: 'IsReturnNonscheduled' })
  isReturnNonscheduled: boolean;

  @Column({ type: 'timestamp without time zone', name: 'EnterTime', nullable: true })
  enterTime: Date | null;

  @Column({ type: 'character varying', name: 'EnterTimeLatitude', nullable: true })
  enterTimeLatitude: string | null;

  @Column({ type: 'character varying', name: 'EnterTimeLongitude', nullable: true })
  enterTimeLongitude: string | null;

  @Column({ type: 'boolean', name: 'EnterLocationIsValid', nullable: true })
  enterLocationIsValid: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'ExitTime', nullable: true })
  exitTime: Date | null;

  @Column({ type: 'character varying', name: 'ExitTimeLatitude', nullable: true })
  exitTimeLatitude: string | null;

  @Column({ type: 'character varying', name: 'ExitTimeLongitude', nullable: true })
  exitTimeLongitude: string | null;

  @Column({ type: 'boolean', name: 'ExitLocationIsValid', nullable: true })
  exitLocationIsValid: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'ExtraPresenceDuration', nullable: true })
  extraPresenceDuration: number | null;

}