import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ChangeCostItemInCalculationArea' })
export class LegacyChangeCostItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'ChangeCostItemInCalculationAreaID' })
  changeCostItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'ChangeCostItemRef' })
  changeCostItemRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CostPartRef' })
  costPartRef: number;

  @Column({ type: 'numeric', name: 'ChangeAmount' })
  changeAmount: number;

  @Column({ type: 'numeric', name: 'OperationalCurrencyChangeAmount' })
  operationalCurrencyChangeAmount: number;

  @Column({ type: 'numeric', name: 'ChangeNetAmount' })
  changeNetAmount: number;

  @Column({ type: 'numeric', name: 'ChangeCost' })
  changeCost: number;

  @Column({ type: 'numeric', name: 'PermanentDiminutionLoss', nullable: true })
  permanentDiminutionLoss: number | null;

  @Column({ type: 'numeric', name: 'PreviousCost' })
  previousCost: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}