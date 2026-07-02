import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQualityControlExtensionRelatedDefectGroup' })
export class LegacyPartQualityControlExtensionRelatedDefectGroup {
  @PrimaryColumn({ type: 'bigint', name: 'PartQualityControlExtensionRelatedDefectGroupID' })
  partQualityControlExtensionRelatedDefectGroupID: number;

  @Column({ type: 'bigint', name: 'PartQualityControlExtensionRef' })
  partQualityControlExtensionRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}