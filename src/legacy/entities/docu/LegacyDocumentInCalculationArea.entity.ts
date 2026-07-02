import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentInCalculationArea' })
export class LegacyDocumentInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentInCalculationAreaID' })
  documentInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'DocumentRef' })
  documentRef: number;

  @Column({ type: 'integer', name: 'AssetTransactionType' })
  assetTransactionType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}