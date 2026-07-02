import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacityGroup' })
export class LegacyRCCPCapacityGroup {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityGroup' })
  rCCPCapacityGroup: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'integer', name: 'CapacityGroup' })
  capacityGroup: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}