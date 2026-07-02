import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionOrderReleaseFailureReason' })
export class LegacyProductionOrderReleaseFailureReason {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionOrderReleaseFailureReasonID' })
  productionOrderReleaseFailureReasonID: number;

  @Column({ type: 'bigint', name: 'ProductionOrderRef' })
  productionOrderRef: number;

  @Column({ type: 'integer', name: 'ReleaseFailureReason' })
  releaseFailureReason: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}