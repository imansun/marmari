import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingGroupEmployee' })
export class LegacyWorkingGroupEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupEmployeeID' })
  workingGroupEmployeeID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bigint', name: 'WorkingGroupRef' })
  workingGroupRef: number;

  @Column({ type: 'timestamp without time zone', name: 'JoinDate' })
  joinDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}