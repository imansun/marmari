import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SendToStoreItemInCalculationArea' })
export class LegacySendToStoreItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'SendToStoreItemInCalculationAreaID' })
  sendToStoreItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'SendToStoreItemRef' })
  sendToStoreItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}