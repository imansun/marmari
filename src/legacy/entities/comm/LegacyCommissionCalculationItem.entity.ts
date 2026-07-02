import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionCalculationItem' })
export class LegacyCommissionCalculationItem {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionCalculationItemID' })
  commissionCalculationItemID: number;

  @Column({ type: 'bigint', name: 'CommissionCalculationRef' })
  commissionCalculationRef: number;

  @Column({ type: 'bigint', name: 'CommissionFactorRef' })
  commissionFactorRef: number;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}