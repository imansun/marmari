import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherEmployee' })
export class LegacyVoucherEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherEmployeeID' })
  voucherEmployeeID: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

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