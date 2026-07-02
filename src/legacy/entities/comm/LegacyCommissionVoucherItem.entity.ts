import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionVoucherItem' })
export class LegacyCommissionVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionVoucherItemID' })
  commissionVoucherItemID: number;

  @Column({ type: 'bigint', name: 'CommissionVoucherRef' })
  commissionVoucherRef: number;

  @Column({ type: 'bigint', name: 'CommissionCalculationRef' })
  commissionCalculationRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}