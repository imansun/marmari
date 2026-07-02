import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IRPItemValue' })
export class LegacyIRPItemValue {
  @PrimaryColumn({ type: 'bigint', name: 'IRPItemValueID' })
  iRPItemValueID: number;

  @Column({ type: 'bigint', name: 'IRPItemRef' })
  iRPItemRef: number;

  @Column({ type: 'bigint', name: 'IRPTimeBucketRef' })
  iRPTimeBucketRef: number;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}