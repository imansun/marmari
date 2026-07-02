import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationPaymentRequestEmployee' })
export class LegacyCompensationPaymentRequestEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationPaymentRequestEmployeeID' })
  compensationPaymentRequestEmployeeID: number;

  @Column({ type: 'bigint', name: 'CompensationPaymentRequestRef' })
  compensationPaymentRequestRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'PaymentValue' })
  paymentValue: number;

}