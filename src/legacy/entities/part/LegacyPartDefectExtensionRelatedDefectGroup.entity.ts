import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDefectExtensionRelatedDefectGroup' })
export class LegacyPartDefectExtensionRelatedDefectGroup {
  @PrimaryColumn({ type: 'bigint', name: 'PartDefectExtensionRelatedDefectGroupID' })
  partDefectExtensionRelatedDefectGroupID: number;

  @Column({ type: 'bigint', name: 'PartDefectExtensionRef' })
  partDefectExtensionRef: number;

  @Column({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}