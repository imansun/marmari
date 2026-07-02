import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeRfidCard' })
export class LegacyEmployeeRfidCard {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeRfidCardID' })
  employeeRfidCardID: number;

  @Column({ type: 'bigint', name: 'RfidCardRef' })
  rfidCardRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'boolean', name: 'Permanent' })
  permanent: boolean;

  @Column({ type: 'timestamp without time zone', name: 'AssignmentDate' })
  assignmentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReturnDate', nullable: true })
  returnDate: Date | null;

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