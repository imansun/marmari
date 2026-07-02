import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartCapacityProfileWorkCenterCapacityType' })
export class LegacyPartCapacityProfileWorkCenterCapacityType {
  @PrimaryColumn({ type: 'bigint', name: 'PartCapacityProfileWorkCenterCapacityTypeID' })
  partCapacityProfileWorkCenterCapacityTypeID: number;

  @Column({ type: 'bigint', name: 'PartCapacityProfileWorkCenterRef' })
  partCapacityProfileWorkCenterRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterCapacityRef' })
  workCenterCapacityRef: number;

  @Column({ type: 'numeric', name: 'UsagePercentage' })
  usagePercentage: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}