import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaPaymentTerm' })
export class LegacyProformaPaymentTerm {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaPaymentTermID' })
  proformaPaymentTermID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'bigint', name: 'TermOfPaymentItemRef' })
  termOfPaymentItemRef: number;

  @Column({ type: 'numeric', name: 'Percentage' })
  percentage: number;

  @Column({ type: 'integer', name: 'EffectiveDateType' })
  effectiveDateType: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate', nullable: true })
  effectiveDate: Date | null;

  @Column({ type: 'integer', name: 'AdditionalDays' })
  additionalDays: number;

  @Column({ type: 'integer', name: 'PaymentMonitoringNotificationType' })
  paymentMonitoringNotificationType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}