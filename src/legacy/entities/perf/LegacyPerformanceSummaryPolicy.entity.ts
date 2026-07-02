import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPolicy' })
export class LegacyPerformanceSummaryPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPolicyID' })
  performanceSummaryPolicyID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryRef' })
  performanceSummaryRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'integer', name: 'DocumentType', nullable: true })
  documentType: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

}