import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalEmployeePartition' })
export class LegacyRfidLocalEmployeePartition {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalEmployeePartitionID' })
  rfidLocalEmployeePartitionID: number;

  @Column({ type: 'bigint', name: 'LocalSyncDataPartitionID' })
  localSyncDataPartitionID: number;

  @Column({ type: 'integer', name: 'EmployeeCount' })
  employeeCount: number;

  @Column({ type: 'boolean', name: 'IsSent' })
  isSent: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}