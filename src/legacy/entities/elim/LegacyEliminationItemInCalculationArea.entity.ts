import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EliminationItemInCalculationArea' })
export class LegacyEliminationItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'EliminationItemInCalculationAreaID' })
  eliminationItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'EliminationItemRef' })
  eliminationItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'numeric', name: 'Loss' })
  loss: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}