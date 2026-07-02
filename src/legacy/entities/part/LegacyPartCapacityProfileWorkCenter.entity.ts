import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartCapacityProfileWorkCenter' })
export class LegacyPartCapacityProfileWorkCenter {
  @PrimaryColumn({ type: 'bigint', name: 'PartCapacityProfileWorkCenterID' })
  partCapacityProfileWorkCenterID: number;

  @Column({ type: 'bigint', name: 'PartCapacityProfileRef' })
  partCapacityProfileRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'numeric', name: 'ParticipationPercentage' })
  participationPercentage: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}