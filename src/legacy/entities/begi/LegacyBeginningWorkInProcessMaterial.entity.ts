import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BeginningWorkInProcessMaterial' })
export class LegacyBeginningWorkInProcessMaterial {
  @PrimaryColumn({ type: 'bigint', name: 'BeginningWorkInProcessMaterialID' })
  beginningWorkInProcessMaterialID: number;

  @Column({ type: 'bigint', name: 'BeginningWorkInProcessRef' })
  beginningWorkInProcessRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'UsedPrecentage', default: 0 })
  usedPrecentage: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}