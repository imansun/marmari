import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionFactorItem' })
export class LegacyCommissionFactorItem {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionFactorItemID' })
  commissionFactorItemID: number;

  @Column({ type: 'bigint', name: 'CommissionFactorRef' })
  commissionFactorRef: number;

  @Column({ type: 'bigint', name: 'CalculationPeriodRef' })
  calculationPeriodRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'FormulaRef', nullable: true })
  formulaRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'State' })
  state: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}