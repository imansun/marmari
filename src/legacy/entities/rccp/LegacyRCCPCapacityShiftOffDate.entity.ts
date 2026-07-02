import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacityShiftOffDate' })
export class LegacyRCCPCapacityShiftOffDate {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityShiftOffDateID' })
  rCCPCapacityShiftOffDateID: number;

  @Column({ type: 'bigint', name: 'RCCPCapacityRef' })
  rCCPCapacityRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}