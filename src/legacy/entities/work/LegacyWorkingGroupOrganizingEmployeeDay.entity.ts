import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WorkingGroupOrganizingEmployeeDay' })
export class LegacyWorkingGroupOrganizingEmployeeDay {
  @PrimaryColumn({ type: 'bigint', name: 'WorkingGroupOrganizingEmployeeDayID' })
  workingGroupOrganizingEmployeeDayID: number;

  @Column({ type: 'bigint', name: 'WorkingGroupOrganizingEmployeeRef' })
  workingGroupOrganizingEmployeeRef: number;

  @Column({ type: 'bigint', name: 'WorkingGroupRef', nullable: true })
  workingGroupRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'boolean', name: 'Edited', default: false })
  edited: boolean;

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