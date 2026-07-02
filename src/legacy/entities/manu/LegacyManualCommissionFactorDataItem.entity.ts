import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ManualCommissionFactorDataItem' })
export class LegacyManualCommissionFactorDataItem {
  @PrimaryColumn({ type: 'bigint', name: 'ManualCommissionFactorDataItemID' })
  manualCommissionFactorDataItemID: number;

  @Column({ type: 'bigint', name: 'ManualCommissionFactorDataRef' })
  manualCommissionFactorDataRef: number;

  @Column({ type: 'bigint', name: 'CommissionFactorRef' })
  commissionFactorRef: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}