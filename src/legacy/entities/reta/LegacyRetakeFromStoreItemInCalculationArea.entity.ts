import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetakeFromStoreItemInCalculationArea' })
export class LegacyRetakeFromStoreItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'RetakeFromStoreItemInCalculationAreaID' })
  retakeFromStoreItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'RetakeFromStoreItemRef' })
  retakeFromStoreItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}