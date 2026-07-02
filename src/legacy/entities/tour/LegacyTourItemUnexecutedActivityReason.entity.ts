import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourItemUnexecutedActivityReason' })
export class LegacyTourItemUnexecutedActivityReason {
  @PrimaryColumn({ type: 'bigint', name: 'TourItemUnexecutedActivityReasonID' })
  tourItemUnexecutedActivityReasonID: number;

  @Column({ type: 'bigint', name: 'TourItemRef' })
  tourItemRef: number;

  @Column({ type: 'bigint', name: 'UnexecutedHotSalesReasonRef', nullable: true })
  unexecutedHotSalesReasonRef: number | null;

  @Column({ type: 'character varying', name: 'UnexecutedHotSalesReasonDescription', nullable: true })
  unexecutedHotSalesReasonDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'HandheldHotSalesCreationDate', nullable: true })
  handheldHotSalesCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'HotSalesLatitude', nullable: true })
  hotSalesLatitude: string | null;

  @Column({ type: 'character varying', name: 'HotSalesLongitude', nullable: true })
  hotSalesLongitude: string | null;

  @Column({ type: 'integer', name: 'HotSalesProvider', nullable: true })
  hotSalesProvider: number | null;

  @Column({ type: 'numeric', name: 'HotSalesAccuracy', nullable: true })
  hotSalesAccuracy: number | null;

  @Column({ type: 'bigint', name: 'UnexecutedOrderTakingReasonRef', nullable: true })
  unexecutedOrderTakingReasonRef: number | null;

  @Column({ type: 'character varying', name: 'UnexecutedOrderTakingReasonDescription', nullable: true })
  unexecutedOrderTakingReasonDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'HandheldOrderTakingCreationDate', nullable: true })
  handheldOrderTakingCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'OrderTakingLatitude', nullable: true })
  orderTakingLatitude: string | null;

  @Column({ type: 'character varying', name: 'OrderTakingLongitude', nullable: true })
  orderTakingLongitude: string | null;

  @Column({ type: 'integer', name: 'OrderTakingProvider', nullable: true })
  orderTakingProvider: number | null;

  @Column({ type: 'numeric', name: 'OrderTakingAccuracy', nullable: true })
  orderTakingAccuracy: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}