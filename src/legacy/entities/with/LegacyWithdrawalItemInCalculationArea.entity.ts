import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WithdrawalItemInCalculationArea' })
export class LegacyWithdrawalItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'WithdrawalItemInCalculationAreaID' })
  withdrawalItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'WithdrawalItemRef' })
  withdrawalItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}