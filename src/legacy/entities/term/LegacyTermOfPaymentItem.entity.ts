import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TermOfPaymentItem' })
export class LegacyTermOfPaymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'TermOfPaymentItemID' })
  termOfPaymentItemID: number;

  @Column({ type: 'bigint', name: 'TermOfPaymentRef' })
  termOfPaymentRef: number;

  @Column({ type: 'integer', name: 'PaymentPercent' })
  paymentPercent: number;

  @Column({ type: 'integer', name: 'EffectiveDateType' })
  effectiveDateType: number;

  @Column({ type: 'integer', name: 'EffectiveDateAdditionalDays' })
  effectiveDateAdditionalDays: number;

  @Column({ type: 'integer', name: 'PaymentMonitoringNotificationType' })
  paymentMonitoringNotificationType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}