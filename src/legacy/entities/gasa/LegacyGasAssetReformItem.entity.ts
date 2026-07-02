import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GasAssetReformItem' })
export class LegacyGasAssetReformItem {
  @PrimaryColumn({ type: 'bigint', name: 'GasAssetReformItemID' })
  gasAssetReformItemID: number;

  @Column({ type: 'bigint', name: 'GasAssetReformRef' })
  gasAssetReformRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'character varying', name: 'PermissionNumber', nullable: true })
  permissionNumber: string | null;

  @Column({ type: 'bigint', name: 'GasDeploymentItemRef', nullable: true })
  gasDeploymentItemRef: number | null;

  @Column({ type: 'bigint', name: 'AcquisitionReceiptItemRef', nullable: true })
  acquisitionReceiptItemRef: number | null;

  @Column({ type: 'bigint', name: 'NewPartRef' })
  newPartRef: number;

  @Column({ type: 'character varying', name: 'NewPartTitle' })
  newPartTitle: string;

  @Column({ type: 'integer', name: 'GasState', nullable: true })
  gasState: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}