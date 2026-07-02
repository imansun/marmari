import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetEquipment' })
export class LegacyAssetEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'AssetEquipmentID' })
  assetEquipmentID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}