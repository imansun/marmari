import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementCalcItem' })
export class LegacySettlementCalcItem {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementCalcItemID' })
  settlementCalcItemID: number;

  @Column({ type: 'bigint', name: 'SettlementCalcRef' })
  settlementCalcRef: number;

  @Column({ type: 'bigint', name: 'CompensationFactorPropertyRef' })
  compensationFactorPropertyRef: number;

  @Column({ type: 'numeric', name: 'CalcValue' })
  calcValue: number;

  @Column({ type: 'numeric', name: 'EditedValue', nullable: true })
  editedValue: number | null;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CompensationFactorRef' })
  compensationFactorRef: number;

}