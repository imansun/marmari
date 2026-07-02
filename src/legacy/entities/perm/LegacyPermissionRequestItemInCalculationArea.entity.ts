import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermissionRequestItemInCalculationArea' })
export class LegacyPermissionRequestItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'PermissionRequestItemInCalculationAreaID' })
  permissionRequestItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'PermissionRequestItemRef' })
  permissionRequestItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}