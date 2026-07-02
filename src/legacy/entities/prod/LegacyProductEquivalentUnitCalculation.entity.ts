import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductEquivalentUnitCalculation' })
export class LegacyProductEquivalentUnitCalculation {
  @PrimaryColumn({ type: 'bigint', name: 'ProductEquivalentUnitCalculationID' })
  productEquivalentUnitCalculationID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'ProductionRef' })
  productionRef: number;

  @Column({ type: 'bigint', name: 'JointProductPartRef', nullable: true })
  jointProductPartRef: number | null;

  @Column({ type: 'numeric', name: 'NormalDeliveryQuantity' })
  normalDeliveryQuantity: number;

  @Column({ type: 'numeric', name: 'WastageDeliveryQuantity' })
  wastageDeliveryQuantity: number;

  @Column({ type: 'numeric', name: 'LabourBeginningQuantity' })
  labourBeginningQuantity: number;

  @Column({ type: 'numeric', name: 'LabourEndingQuantity' })
  labourEndingQuantity: number;

  @Column({ type: 'numeric', name: 'LabourAbnormalWastageQuantity' })
  labourAbnormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'LabourNormalWastageQuantity' })
  labourNormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'LabourProductQuantity' })
  labourProductQuantity: number;

  @Column({ type: 'numeric', name: 'OverheadBeginningQuantity' })
  overheadBeginningQuantity: number;

  @Column({ type: 'numeric', name: 'OverheadEndingQuantity' })
  overheadEndingQuantity: number;

  @Column({ type: 'numeric', name: 'OverheadAbnormalWastageQuantity' })
  overheadAbnormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'OverheadNormalWastageQuantity' })
  overheadNormalWastageQuantity: number;

  @Column({ type: 'numeric', name: 'OverheadProductQuantity' })
  overheadProductQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}