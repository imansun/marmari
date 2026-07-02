import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StockTakingWithTrackingFactorSecondCountItem' })
export class LegacyStockTakingWithTrackingFactorSecondCountItem {
  @PrimaryColumn({ type: 'bigint', name: 'StockTakingWithTrackingFactorSecondCountItemID' })
  stockTakingWithTrackingFactorSecondCountItemID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactor1Ref', nullable: true })
  trackingFactor1Ref: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactor2Ref', nullable: true })
  trackingFactor2Ref: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactor3Ref', nullable: true })
  trackingFactor3Ref: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactor4Ref', nullable: true })
  trackingFactor4Ref: number | null;

  @Column({ type: 'bigint', name: 'TrackingFactor5Ref', nullable: true })
  trackingFactor5Ref: number | null;

  @Column({ type: 'numeric', name: 'SecondComputation', nullable: true })
  secondComputation: number | null;

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