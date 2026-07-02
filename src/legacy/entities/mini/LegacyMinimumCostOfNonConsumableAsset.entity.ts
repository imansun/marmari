import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MinimumCostOfNonConsumableAsset' })
export class LegacyMinimumCostOfNonConsumableAsset {
  @PrimaryColumn({ type: 'bigint', name: 'MinimumCostOfNonConsumableAssetID' })
  minimumCostOfNonConsumableAssetID: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'numeric', name: 'MinimumCost' })
  minimumCost: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}