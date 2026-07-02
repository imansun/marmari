import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StocktakingPeriodVoucher' })
export class LegacyStocktakingPeriodVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'StocktakingPeriodVoucherID' })
  stocktakingPeriodVoucherID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'bigint', name: 'StocktakingPeriodRef' })
  stocktakingPeriodRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}