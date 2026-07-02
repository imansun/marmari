import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentFollowUp' })
export class LegacyPaymentFollowUp {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentFollowUpID' })
  paymentFollowUpID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'bigint', name: 'PaymentFollowUpRecipientRef' })
  paymentFollowUpRecipientRef: number;

  @Column({ type: 'bigint', name: 'ProformaPaymentTermRef' })
  proformaPaymentTermRef: number;

  @Column({ type: 'integer', name: 'FollowUpDateType' })
  followUpDateType: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'character varying', name: 'DocumentNumber', nullable: true })
  documentNumber: string | null;

  @Column({ type: 'integer', name: 'DocumentVersion', nullable: true })
  documentVersion: number | null;

  @Column({ type: 'timestamp without time zone', name: 'FollowUpDate' })
  followUpDate: Date;

  @Column({ type: 'integer', name: 'NotificationType' })
  notificationType: number;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}