import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeLocalSyncData' })
export class LegacyEmployeeLocalSyncData {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeLocalSyncDataID' })
  employeeLocalSyncDataID: number;

  @Column({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number;

  @Column({ type: 'bigint', name: 'LocalSyncDataPartitionRef', nullable: true })
  localSyncDataPartitionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}