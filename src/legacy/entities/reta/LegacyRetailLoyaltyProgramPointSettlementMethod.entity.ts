import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailLoyaltyProgramPointSettlementMethod' })
export class LegacyRetailLoyaltyProgramPointSettlementMethod {
  @PrimaryColumn({ type: 'bigint', name: 'RetailLoyaltyProgramPointSettlementMethodID' })
  retailLoyaltyProgramPointSettlementMethodID: number;

  @Column({ type: 'bigint', name: 'RetailLoyaltyProgramRef' })
  retailLoyaltyProgramRef: number;

  @Column({ type: 'bigint', name: 'SettlementMethodRef' })
  settlementMethodRef: number;

  @Column({ type: 'boolean', name: 'EffectiveInReceipt' })
  effectiveInReceipt: boolean;

  @Column({ type: 'boolean', name: 'EffectiveInPayment' })
  effectiveInPayment: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}