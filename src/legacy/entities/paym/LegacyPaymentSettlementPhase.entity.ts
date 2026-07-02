import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PaymentSettlementPhase' })
export class LegacyPaymentSettlementPhase {
  @PrimaryColumn({ type: 'bigint', name: 'PaymentSettlementPhaseID' })
  paymentSettlementPhaseID: number;

  @Column({ type: 'bigint', name: 'PaymentSettlementRef' })
  paymentSettlementRef: number;

  @Column({ type: 'integer', name: 'Phase' })
  phase: number;

  @Column({ type: 'numeric', name: 'Percentage' })
  percentage: number;

  @Column({ type: 'integer', name: 'DaysNumber' })
  daysNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}