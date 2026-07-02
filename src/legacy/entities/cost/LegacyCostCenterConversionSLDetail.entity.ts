import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostCenterConversionSLDetail' })
export class LegacyCostCenterConversionSLDetail {
  @PrimaryColumn({ type: 'bigint', name: 'CostCenterConversionSLDetailID' })
  costCenterConversionSLDetailID: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'Month' })
  month: number;

  @Column({ type: 'bigint', name: 'CostCenterConversionSLRef' })
  costCenterConversionSLRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}