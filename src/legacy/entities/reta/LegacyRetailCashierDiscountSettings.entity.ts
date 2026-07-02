import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailCashierDiscountSettings' })
export class LegacyRetailCashierDiscountSettings {
  @PrimaryColumn({ type: 'bigint', name: 'RetailCashierDiscountSettingsID' })
  retailCashierDiscountSettingsID: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'numeric', name: 'MaxHeaderPercent', nullable: true })
  maxHeaderPercent: number | null;

  @Column({ type: 'numeric', name: 'MaxItemPercent', nullable: true })
  maxItemPercent: number | null;

  @Column({ type: 'numeric', name: 'MaxHeaderAmount', nullable: true })
  maxHeaderAmount: number | null;

  @Column({ type: 'numeric', name: 'MaxItemAmount', nullable: true })
  maxItemAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}