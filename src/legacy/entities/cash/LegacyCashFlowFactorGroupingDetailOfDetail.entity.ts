import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CashFlowFactorGroupingDetailOfDetail' })
export class LegacyCashFlowFactorGroupingDetailOfDetail {
  @PrimaryColumn({ type: 'bigint', name: 'CashFlowFactorGroupingDetailOfDetailID' })
  cashFlowFactorGroupingDetailOfDetailID: number;

  @Column({ type: 'bigint', name: 'CashFlowFactorRef' })
  cashFlowFactorRef: number;

  @Column({ type: 'bigint', name: 'CashFlowFactorGroupingDetailRef' })
  cashFlowFactorGroupingDetailRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}