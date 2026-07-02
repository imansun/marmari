import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InsuranceItem' })
export class LegacyInsuranceItem {
  @PrimaryColumn({ type: 'bigint', name: 'InsuranceItemId' })
  insuranceItemId: number;

  @Column({ type: 'bigint', name: 'InsuranceRef' })
  insuranceRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'numeric', name: 'EstimatedPrice' })
  estimatedPrice: number;

  @Column({ type: 'numeric', name: 'InsuranceAmount' })
  insuranceAmount: number;

  @Column({ type: 'numeric', name: 'TaxAmount', nullable: true })
  taxAmount: number | null;

  @Column({ type: 'numeric', name: 'DutyAmount', nullable: true })
  dutyAmount: number | null;

  @Column({ type: 'numeric', name: 'DeploymentInsuranceCost', nullable: true })
  deploymentInsuranceCost: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}