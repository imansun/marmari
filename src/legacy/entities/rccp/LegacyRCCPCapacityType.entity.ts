import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacityType' })
export class LegacyRCCPCapacityType {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityTypeID' })
  rCCPCapacityTypeID: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bigint', name: 'CapacityTypeRef' })
  capacityTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}