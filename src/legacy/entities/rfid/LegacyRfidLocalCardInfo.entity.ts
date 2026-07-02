import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidLocalCardInfo' })
export class LegacyRfidLocalCardInfo {
  @PrimaryColumn({ type: 'bigint', name: 'RfidLocalCardInfoID' })
  rfidLocalCardInfoID: number;

  @Column({ type: 'character varying', name: 'CardNumber' })
  cardNumber: string;

  @Column({ type: 'character varying', name: 'EmployeeCode', nullable: true })
  employeeCode: string | null;

  @Column({ type: 'character varying', name: 'EmployeeFirstName', nullable: true })
  employeeFirstName: string | null;

  @Column({ type: 'character varying', name: 'EmployeeLastName', nullable: true })
  employeeLastName: string | null;

  @Column({ type: 'character varying', name: 'EmployeeGender', nullable: true })
  employeeGender: string | null;

  @Column({ type: 'character varying', name: 'EmployeeWorkLocation', nullable: true })
  employeeWorkLocation: string | null;

  @Column({ type: 'character varying', name: 'EmployeeDepartment', nullable: true })
  employeeDepartment: string | null;

  @Column({ type: 'bytea', name: 'EmployeePhoto', nullable: true })
  employeePhoto: Buffer | null;

  @Column({ type: 'timestamp without time zone', name: 'SyncDate' })
  syncDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ApplyDate' })
  applyDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ReturnDate', nullable: true })
  returnDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RfidLocalEmployeeRef', nullable: true })
  rfidLocalEmployeeRef: number | null;

}