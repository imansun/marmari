import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssetExtraFieldGroup' })
export class LegacyAssetExtraFieldGroup {
  @PrimaryColumn({ type: 'bigint', name: 'AssetExtraFieldGroupID' })
  assetExtraFieldGroupID: number;

  @Column({ type: 'bigint', name: 'AssetExtraFieldRef', nullable: true })
  assetExtraFieldRef: number | null;

  @Column({ type: 'bigint', name: 'AssetGroupRef', nullable: true })
  assetGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}