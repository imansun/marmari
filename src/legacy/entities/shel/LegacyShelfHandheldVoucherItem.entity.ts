import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShelfHandheldVoucherItem' })
export class LegacyShelfHandheldVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'ShelfHandheldVoucherItemID' })
  shelfHandheldVoucherItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'StoreStructureRef' })
  storeStructureRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef', nullable: true })
  partUnitRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'StorageUnitRef', nullable: true })
  storageUnitRef: number | null;

  @Column({ type: 'bigint', name: 'StoragePartUnitRef', nullable: true })
  storagePartUnitRef: number | null;

  @Column({ type: 'numeric', name: 'StorageUnitQuantity', nullable: true })
  storageUnitQuantity: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'integer', name: 'Direction' })
  direction: number;

  @Column({ type: 'character varying', name: 'TrackingFactor1', nullable: true })
  trackingFactor1: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor2', nullable: true })
  trackingFactor2: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor3', nullable: true })
  trackingFactor3: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor4', nullable: true })
  trackingFactor4: string | null;

  @Column({ type: 'character varying', name: 'TrackingFactor5', nullable: true })
  trackingFactor5: string | null;

  @Column({ type: 'bigint', name: 'PartInvTrackingFactor1', nullable: true })
  partInvTrackingFactor1: number | null;

  @Column({ type: 'bigint', name: 'PartInvTrackingFactor2', nullable: true })
  partInvTrackingFactor2: number | null;

  @Column({ type: 'bigint', name: 'PartInvTrackingFactor3', nullable: true })
  partInvTrackingFactor3: number | null;

  @Column({ type: 'bigint', name: 'PartInvTrackingFactor4', nullable: true })
  partInvTrackingFactor4: number | null;

  @Column({ type: 'bigint', name: 'PartInvTrackingFactor5', nullable: true })
  partInvTrackingFactor5: number | null;

  @Column({ type: 'bigint', name: 'ShelfRef' })
  shelfRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ShelfHandheldVoucherRef' })
  shelfHandheldVoucherRef: number;

  @Column({ type: 'bigint', name: 'HandheldVoucherItemRef', nullable: true })
  handheldVoucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'HandheldVoucherItemTrackingFactorRef', nullable: true })
  handheldVoucherItemTrackingFactorRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}