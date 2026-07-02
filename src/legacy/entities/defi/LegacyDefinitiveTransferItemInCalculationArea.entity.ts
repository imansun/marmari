import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DefinitiveTransferItemInCalculationArea' })
export class LegacyDefinitiveTransferItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'DefinitiveTransferItemInCalculationAreaID' })
  definitiveTransferItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'DefinitiveTransferItemRef' })
  definitiveTransferItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'numeric', name: 'EvaluationPrice', nullable: true })
  evaluationPrice: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}