import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingGroupOrganizingHistoryBase' })
export class LegacyWorkingGroupOrganizingHistoryBase {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupOrganizingHistoryID' })
  workingGroupOrganizingHistoryID: number;

  @Column({ type: 'bigint', name: 'WorkingGroupOrganizingRef' })
  workingGroupOrganizingRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DateChange' })
  dateChange: Date;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'MembershipDate' })
  membershipDate: Date;

  @Column({ type: 'bigint', name: 'WorkingGroupRef' })
  workingGroupRef: number;

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