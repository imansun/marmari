import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionConsumptionCalculation' })
export class LegacyProductionConsumptionCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionConsumptionCalculationID' })
  productionConsumptionCalculationID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'ProductEquivalentUnitCalculationMaterialRef' })
  productEquivalentUnitCalculationMaterialRef: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'JointProductPartRef', nullable: true })
  jointProductPartRef: number | null;

  @Column({ type: 'bigint', name: 'InputTransactionRef' })
  inputTransactionRef: number;

  @Column({ type: 'bigint', name: 'InputTransactionWorkstationRef' })
  inputTransactionWorkstationRef: number;

  @Column({ type: 'numeric', name: 'WithoutReferenceQuantity' })
  withoutReferenceQuantity: number;

  @Column({ type: 'numeric', name: 'WithReferenceQuantity' })
  withReferenceQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}