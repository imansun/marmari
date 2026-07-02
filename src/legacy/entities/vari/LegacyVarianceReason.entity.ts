import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VarianceReason' })
export class LegacyVarianceReason {
  @PrimaryColumn({ type: 'bigint', name: 'VarianceReasonID' })
  varianceReasonID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}