import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunBom' })
export class LegacyCalculationRunBom {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunBomID' })
  calculationRunBomID: number;

  @Column({ type: 'bigint', name: 'ParentID', nullable: true })
  parentID: number | null;

  @Column({ type: 'bigint', name: 'CalculationRunRef' })
  calculationRunRef: number;

  @Column({ type: 'bigint', name: 'BomID', nullable: true })
  bomID: number | null;

  @Column({ type: 'bigint', name: 'RoutingID', nullable: true })
  routingID: number | null;

  @Column({ type: 'bigint', name: 'ExplosionPlantID', nullable: true })
  explosionPlantID: number | null;

  @Column({ type: 'character varying', name: 'ExplosionPlantName', nullable: true })
  explosionPlantName: string | null;

  @Column({ type: 'numeric', name: 'ExplosionUsagePercentage', nullable: true })
  explosionUsagePercentage: number | null;

  @Column({ type: 'character varying', name: 'DeepLevel', nullable: true })
  deepLevel: string | null;

  @Column({ type: 'character varying', name: 'LevelNo' })
  levelNo: string;

  @Column({ type: 'bigint', name: 'PartID' })
  partID: number;

  @Column({ type: 'character varying', name: 'PartCode', nullable: true })
  partCode: string | null;

  @Column({ type: 'character varying', name: 'PartName', nullable: true })
  partName: string | null;

  @Column({ type: 'bigint', name: 'BomUnitID', nullable: true })
  bomUnitID: number | null;

  @Column({ type: 'character varying', name: 'BomUnitName', nullable: true })
  bomUnitName: string | null;

  @Column({ type: 'bigint', name: 'LotSizeSettingUnitID', nullable: true })
  lotSizeSettingUnitID: number | null;

  @Column({ type: 'character varying', name: 'LotSizeSettingUnitName', nullable: true })
  lotSizeSettingUnitName: string | null;

  @Column({ type: 'numeric', name: 'BaseQuantity', nullable: true })
  baseQuantity: number | null;

  @Column({ type: 'character varying', name: 'BomTitle', nullable: true })
  bomTitle: string | null;

  @Column({ type: 'integer', name: 'LotSizeProcedure', nullable: true })
  lotSizeProcedure: number | null;

  @Column({ type: 'character varying', name: 'LotSizeProcedureName', nullable: true })
  lotSizeProcedureName: string | null;

  @Column({ type: 'numeric', name: 'MinimumLotSizing', nullable: true })
  minimumLotSizing: number | null;

  @Column({ type: 'numeric', name: 'MaximumLotSizing', nullable: true })
  maximumLotSizing: number | null;

  @Column({ type: 'numeric', name: 'RoundingValue', nullable: true })
  roundingValue: number | null;

  @Column({ type: 'numeric', name: 'FixedLotSizing', nullable: true })
  fixedLotSizing: number | null;

  @Column({ type: 'integer', name: 'PeriodCalculationType', nullable: true })
  periodCalculationType: number | null;

  @Column({ type: 'character varying', name: 'PeriodCalculationTypeName', nullable: true })
  periodCalculationTypeName: string | null;

  @Column({ type: 'integer', name: 'PeriodValue', nullable: true })
  periodValue: number | null;

  @Column({ type: 'integer', name: 'EstimatedLeadTime', nullable: true })
  estimatedLeadTime: number | null;

  @Column({ type: 'integer', name: 'MRPType', nullable: true })
  mRPType: number | null;

  @Column({ type: 'character varying', name: 'MRPTypeName', nullable: true })
  mRPTypeName: string | null;

  @Column({ type: 'numeric', name: 'SafetyStock', nullable: true })
  safetyStock: number | null;

  @Column({ type: 'integer', name: 'LeadTimeCalculationType', nullable: true })
  leadTimeCalculationType: number | null;

  @Column({ type: 'character varying', name: 'LeadTimeCalculationTypeName', nullable: true })
  leadTimeCalculationTypeName: string | null;

  @Column({ type: 'integer', name: 'PartRecieveLeadTime', nullable: true })
  partRecieveLeadTime: number | null;

  @Column({ type: 'integer', name: 'SafetyTime', nullable: true })
  safetyTime: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ItemID', nullable: true })
  itemID: number | null;

  @Column({ type: 'numeric', name: 'ItemQuantity', nullable: true })
  itemQuantity: number | null;

  @Column({ type: 'bigint', name: 'ItemUnitID', nullable: true })
  itemUnitID: number | null;

  @Column({ type: 'character varying', name: 'ItemUnitName', nullable: true })
  itemUnitName: string | null;

  @Column({ type: 'integer', name: 'ItemGroupNumber', nullable: true })
  itemGroupNumber: number | null;

  @Column({ type: 'integer', name: 'ItemPriority', nullable: true })
  itemPriority: number | null;

  @Column({ type: 'integer', name: 'ItemAlternativeStrategy', nullable: true })
  itemAlternativeStrategy: number | null;

  @Column({ type: 'numeric', name: 'ItemUsagePercentage', nullable: true })
  itemUsagePercentage: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}