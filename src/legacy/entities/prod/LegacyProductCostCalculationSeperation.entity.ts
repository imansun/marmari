import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCostCalculationSeperation' })
export class LegacyProductCostCalculationSeperation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCostCalculationSeperationID' })
  productCostCalculationSeperationID: number;

  @Column({ type: 'bigint', name: 'ProductCostCalculationRef' })
  productCostCalculationRef: number;

  @Column({ type: 'bigint', name: 'RelatedProductCostCalculationRef', nullable: true })
  relatedProductCostCalculationRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'Level' })
  level: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'LabourFee' })
  labourFee: number;

  @Column({ type: 'numeric', name: 'OverheadFee' })
  overheadFee: number;

  @Column({ type: 'numeric', name: 'LabourPrice' })
  labourPrice: number;

  @Column({ type: 'numeric', name: 'OverheadPrice' })
  overheadPrice: number;

  @Column({ type: 'numeric', name: 'MaterialPrice' })
  materialPrice: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'numeric', name: 'TotalLabourPrice' })
  totalLabourPrice: number;

  @Column({ type: 'numeric', name: 'TotalOverheadPrice' })
  totalOverheadPrice: number;

  @Column({ type: 'numeric', name: 'TotalMaterialPrice' })
  totalMaterialPrice: number;

  @Column({ type: 'numeric', name: 'TotalPrice' })
  totalPrice: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'numeric', name: 'RegulatedRatio', default: 1 })
  regulatedRatio: number;

  @Column({ type: 'numeric', name: 'InvRegulatedRatio', default: 1 })
  invRegulatedRatio: number;

  @Column({ type: 'numeric', name: 'SolidAmount', nullable: true })
  solidAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'FixLabourFee', default: 0 })
  fixLabourFee: number;

  @Column({ type: 'numeric', name: 'VariableLabourFee', default: 0 })
  variableLabourFee: number;

  @Column({ type: 'numeric', name: 'FixOverheadFee', default: 0 })
  fixOverheadFee: number;

  @Column({ type: 'numeric', name: 'VariableOverheadFee', default: 0 })
  variableOverheadFee: number;

  @Column({ type: 'numeric', name: 'FixLabourPrice', default: 0 })
  fixLabourPrice: number;

  @Column({ type: 'numeric', name: 'VariableLabourPrice', default: 0 })
  variableLabourPrice: number;

  @Column({ type: 'numeric', name: 'FixOverheadPrice', default: 0 })
  fixOverheadPrice: number;

  @Column({ type: 'numeric', name: 'VariableOverheadPrice', default: 0 })
  variableOverheadPrice: number;

  @Column({ type: 'numeric', name: 'TotalFixLabourPrice', default: 0 })
  totalFixLabourPrice: number;

  @Column({ type: 'numeric', name: 'TotalVariableLabourPrice', default: 0 })
  totalVariableLabourPrice: number;

  @Column({ type: 'numeric', name: 'TotalFixOverheadPrice', default: 0 })
  totalFixOverheadPrice: number;

  @Column({ type: 'numeric', name: 'TotalVariableOverheadPrice', default: 0 })
  totalVariableOverheadPrice: number;

}