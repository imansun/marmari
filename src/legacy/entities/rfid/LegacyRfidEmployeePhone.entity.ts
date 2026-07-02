import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidEmployeePhone' })
export class LegacyRfidEmployeePhone {
  @PrimaryColumn({ type: 'bigint', name: 'RfidEmployeePhoneID' })
  rfidEmployeePhoneID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'PhoneId' })
  phoneId: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}