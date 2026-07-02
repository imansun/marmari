import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartCapacityProfileStandardValue' })
export class LegacyPartCapacityProfileStandardValue {
  @PrimaryColumn({ type: 'bigint', name: 'PartCapacityProfileStandardValueID' })
  partCapacityProfileStandardValueID: number;

  @Column({ type: 'bigint', name: 'PartCapacityProfileRef' })
  partCapacityProfileRef: number;

  @Column({ type: 'bigint', name: 'StandardValueRef' })
  standardValueRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}