import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StockTakingWithTrackingFactorThirdCount' })
export class LegacyStockTakingWithTrackingFactorThirdCount {
  @PrimaryColumn({ type: 'bigint', name: 'StockTakingWithTrackingFactorThirdCountID' })
  stockTakingWithTrackingFactorThirdCountID: number;

  @Column({ type: 'bigint', name: 'StockTakingPeriodRef', nullable: true })
  stockTakingPeriodRef: number | null;

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