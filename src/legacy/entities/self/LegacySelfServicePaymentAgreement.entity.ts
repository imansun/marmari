import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServicePaymentAgreement' })
export class LegacySelfServicePaymentAgreement {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServicePaymentAgreementID' })
  selfServicePaymentAgreementID: number;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef' })
  paymentAgreementRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}