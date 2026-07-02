import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GasDeploymentItem' })
export class LegacyGasDeploymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'GasDeploymentItemID' })
  gasDeploymentItemID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'GasDeploymentRef' })
  gasDeploymentRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'OldAcquisitionNumber' })
  oldAcquisitionNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'OldAcquisitionDate' })
  oldAcquisitionDate: Date;

  @Column({ type: 'character varying', name: 'ReceiptNumber' })
  receiptNumber: string;

  @Column({ type: 'character varying', name: 'OrderNumber' })
  orderNumber: string;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'character varying', name: 'PlaqueNumber' })
  plaqueNumber: string;

  @Column({ type: 'character varying', name: 'OldPlaqueNumber', nullable: true })
  oldPlaqueNumber: string | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'integer', name: 'AcquisitionType', nullable: true })
  acquisitionType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'AcquisitionDate', nullable: true })
  acquisitionDate: Date | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'numeric', name: 'AccumulatedDepreciationValue', nullable: true })
  accumulatedDepreciationValue: number | null;

  @Column({ type: 'timestamp without time zone', name: 'UtilizationDate' })
  utilizationDate: Date;

  @Column({ type: 'numeric', name: 'SalvageValue', nullable: true })
  salvageValue: number | null;

  @Column({ type: 'numeric', name: 'MaxBookValue', nullable: true })
  maxBookValue: number | null;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'integer', name: 'GasState' })
  gasState: number;

  @Column({ type: 'bigint', name: 'CollectorRef' })
  collectorRef: number;

  @Column({ type: 'character varying', name: 'PermissionNumber', nullable: true })
  permissionNumber: string | null;

  @Column({ type: 'bigint', name: 'ReceiverUnitRef' })
  receiverUnitRef: number;

  @Column({ type: 'bigint', name: 'DelivererRef' })
  delivererRef: number;

  @Column({ type: 'bigint', name: 'SettlementPlaceRef' })
  settlementPlaceRef: number;

  @Column({ type: 'character varying', name: 'GoodRequestNumber', nullable: true })
  goodRequestNumber: string | null;

  @Column({ type: 'integer', name: 'DeploymentDisketteState' })
  deploymentDisketteState: number;

  @Column({ type: 'numeric', name: 'ExpertPrice', nullable: true })
  expertPrice: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'StandardCode' })
  standardCode: string;

}