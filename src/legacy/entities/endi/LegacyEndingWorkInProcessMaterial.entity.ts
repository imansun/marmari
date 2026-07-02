import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EndingWorkInProcessMaterial' })
export class LegacyEndingWorkInProcessMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'EndingWorkInProcessMaterialID' })
  endingWorkInProcessMaterialID: number;

  @Column({ type: 'bigint', name: 'EndingWorkInProcessRef' })
  endingWorkInProcessRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'UsedPrecentage', default: 0 })
  usedPrecentage: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}