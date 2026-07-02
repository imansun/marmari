import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsuranceEndorsementItem' })
export class LegacyInsuranceEndorsementItem {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceEndorsementItemID' })
  insuranceEndorsementItemID: number;

  @Column({ type: 'bigint', name: 'InsuranceEndorsementRef' })
  insuranceEndorsementRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'InsuranceItemRef' })
  insuranceItemRef: number;

  @Column({ type: 'numeric', name: 'EndorsementAmount' })
  endorsementAmount: number;

  @Column({ type: 'numeric', name: 'EndorsementEstimatedPrice' })
  endorsementEstimatedPrice: number;

  @Column({ type: 'numeric', name: 'TaxAmount', nullable: true })
  taxAmount: number | null;

  @Column({ type: 'numeric', name: 'DutyAmount', nullable: true })
  dutyAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}