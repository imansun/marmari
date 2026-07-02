import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherItemTrackingFactor' })
export class LegacyInventoryVoucherItemTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherTrackingFactorID' })
  inventoryVoucherTrackingFactorID: number;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor1' })
  trackingFactor1: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor2' })
  trackingFactor2: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor3' })
  trackingFactor3: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor4' })
  trackingFactor4: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'TrackingFactor5' })
  trackingFactor5: string | null;

  @PrimaryColumn({ type: 'bigint', name: '1stPartInvTrackingFactor' })
  _1stPartInvTrackingFactor: number | null;

  @PrimaryColumn({ type: 'bigint', name: '2ndPartInvTrackingFactor' })
  _2ndPartInvTrackingFactor: number | null;

  @PrimaryColumn({ type: 'bigint', name: '3rdPartInvTrackingFactor' })
  _3rdPartInvTrackingFactor: number | null;

  @PrimaryColumn({ type: 'bigint', name: '4thPartInvTrackingFactor' })
  _4thPartInvTrackingFactor: number | null;

  @PrimaryColumn({ type: 'bigint', name: '5thPartInvTrackingFactor' })
  _5thPartInvTrackingFactor: number | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'numeric', name: 'SecondUnitQuantity' })
  secondUnitQuantity: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @PrimaryColumn({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @PrimaryColumn({ type: 'character varying', name: 'Barcode' })
  barcode: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'VoucherCreationDate' })
  voucherCreationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BatchRef' })
  batchRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

}