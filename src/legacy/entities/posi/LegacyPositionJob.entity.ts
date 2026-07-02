import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PositionJob' })
export class LegacyPositionJob {
  @PrimaryColumn({ type: 'bigint', name: 'PositionJobID' })
  positionJobID: number;

  @Column({ type: 'bigint', name: 'PositionRef' })
  positionRef: number;

  @Column({ type: 'bigint', name: 'JobRef' })
  jobRef: number;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}