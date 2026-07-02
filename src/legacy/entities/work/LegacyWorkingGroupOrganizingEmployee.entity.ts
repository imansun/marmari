import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingGroupOrganizingEmployee' })
export class LegacyWorkingGroupOrganizingEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupOrganizingEmployeeID' })
  workingGroupOrganizingEmployeeID: number;

  @Column({ type: 'bigint', name: 'WorkingGroupOrganizingRef' })
  workingGroupOrganizingRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'TotalWorkingMinutes', nullable: true })
  totalWorkingMinutes: number | null;

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