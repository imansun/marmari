import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalEmployee' })
export class LegacyRfidLocalEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalEmployeeID' })
  rfidLocalEmployeeID: number;

  @Column({ type: 'bigint', name: 'EmployeeID' })
  employeeID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'FirstName', nullable: true })
  firstName: string | null;

  @Column({ type: 'character varying', name: 'LastName', nullable: true })
  lastName: string | null;

  @Column({ type: 'character varying', name: 'Gender', nullable: true })
  gender: string | null;

  @Column({ type: 'character varying', name: 'WorkLocation', nullable: true })
  workLocation: string | null;

  @Column({ type: 'character varying', name: 'Department', nullable: true })
  department: string | null;

  @Column({ type: 'bytea', name: 'Photo', nullable: true })
  photo: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RfidLocalEmployeePartitionRef', nullable: true })
  rfidLocalEmployeePartitionRef: number | null;

}