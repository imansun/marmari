import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionReceiptItem' })
export class LegacyAcquisitionReceiptItem {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionReceiptItemID' })
  acquisitionReceiptItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'PlaqueNumber', nullable: true })
  plaqueNumber: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'bigint', name: 'CostCenterRef' })
  costCenterRef: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'bigint', name: 'ProjectRef', nullable: true })
  projectRef: number | null;

  @Column({ type: 'numeric', name: 'PurchaseAmount' })
  purchaseAmount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyPurchaseAmount' })
  operationalCurrencyPurchaseAmount: number;

  @Column({ type: 'numeric', name: 'IncrementDecrement' })
  incrementDecrement: number;

  @Column({ type: 'numeric', name: 'NetPurchaseAmount' })
  netPurchaseAmount: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'timestamp without time zone', name: 'UtilizationDate' })
  utilizationDate: Date;

  @Column({ type: 'bigint', name: 'AcquisitionReceiptRef' })
  acquisitionReceiptRef: number;

  @Column({ type: 'bigint', name: 'DelivererRef', nullable: true })
  delivererRef: number | null;

  @Column({ type: 'character varying', name: 'OldPlaqueNumber', nullable: true })
  oldPlaqueNumber: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'GasState', nullable: true })
  gasState: number | null;

  @Column({ type: 'character varying', name: 'GasPermissionNumber', nullable: true })
  gasPermissionNumber: string | null;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

}