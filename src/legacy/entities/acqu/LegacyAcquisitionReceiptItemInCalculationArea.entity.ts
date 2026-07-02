import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionReceiptItemInCalculationArea' })
export class LegacyAcquisitionReceiptItemInCalculationArea {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionReceiptItemInCalculationAreaID' })
  acquisitionReceiptItemInCalculationAreaID: number;

  @Column({ type: 'bigint', name: 'AcquisitionReceiptItemRef' })
  acquisitionReceiptItemRef: number;

  @Column({ type: 'bigint', name: 'AssetTransactionRef' })
  assetTransactionRef: number;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupInCalculationAreaRef' })
  assetGroupInCalculationAreaRef: number;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'numeric', name: 'SalvageValue' })
  salvageValue: number;

  @Column({ type: 'boolean', name: 'DepreciateInAcquisitionFiscalYear' })
  depreciateInAcquisitionFiscalYear: boolean;

  @Column({ type: 'numeric', name: 'AccumulatedDepreciationValue', nullable: true })
  accumulatedDepreciationValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'GasExpertPrice', nullable: true })
  gasExpertPrice: number | null;

}