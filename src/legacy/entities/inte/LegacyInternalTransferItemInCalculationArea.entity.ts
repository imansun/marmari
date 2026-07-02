import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalTransferItemInCalculationArea' })
export class LegacyInternalTransferItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'InternalTransferItemInCalculationAreaID' })
  internalTransferItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'InternalTransferItemRef' })
  internalTransferItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}