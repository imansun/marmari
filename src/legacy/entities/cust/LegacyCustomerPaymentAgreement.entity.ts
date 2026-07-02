import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerPaymentAgreement' })
export class LegacyCustomerPaymentAgreement {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerPaymentAgreementID' })
  customerPaymentAgreementID: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerGroupRef', nullable: true })
  customerGroupRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef' })
  paymentAgreementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}