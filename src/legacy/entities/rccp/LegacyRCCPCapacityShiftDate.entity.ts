import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacityShiftDate' })
export class LegacyRCCPCapacityShiftDate {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityShiftDateID' })
  rCCPCapacityShiftDateID: number;

  @Column({ type: 'bigint', name: 'RCCPCapacityRef' })
  rCCPCapacityRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'TotalActualCapacity' })
  totalActualCapacity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}