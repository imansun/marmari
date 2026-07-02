import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentFollowUpRecipient' })
export class LegacyPaymentFollowUpRecipient {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentFollowUpRecipientID' })
  paymentFollowUpRecipientID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @Column({ type: 'bigint', name: 'RecipientRef' })
  recipientRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}