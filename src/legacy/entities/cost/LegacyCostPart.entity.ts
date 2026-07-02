import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostPart' })
export class LegacyCostPart {
  @PrimaryColumn({ type: 'bigint', name: 'CostPartID' })
  costPartID: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @Column({ type: 'integer', name: 'CostType' })
  costType: number;

  @Column({ type: 'numeric', name: 'Cost' })
  cost: number;

  @Column({ type: 'timestamp without time zone', name: 'DepreciationCalculationStartDate' })
  depreciationCalculationStartDate: Date;

  @Column({ type: 'numeric', name: 'UsefulLife', nullable: true })
  usefulLife: number | null;

  @Column({ type: 'bigint', name: 'DepreciationMethodRef', nullable: true })
  depreciationMethodRef: number | null;

  @Column({ type: 'integer', name: 'DepreciationMethodType', nullable: true })
  depreciationMethodType: number | null;

  @Column({ type: 'numeric', name: 'DepreciationRate', nullable: true })
  depreciationRate: number | null;

  @Column({ type: 'integer', name: 'DepreciationState' })
  depreciationState: number;

  @Column({ type: 'timestamp without time zone', name: 'UtilizationDate' })
  utilizationDate: Date;

  @Column({ type: 'numeric', name: 'SalvageValue' })
  salvageValue: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'RootRef', nullable: true })
  rootRef: number | null;

  @Column({ type: 'numeric', name: 'BaseBookValue', nullable: true })
  baseBookValue: number | null;

  @Column({ type: 'numeric', name: 'BaseUsefulLife', nullable: true })
  baseUsefulLife: number | null;

  @Column({ type: 'bigint', name: 'CalculationAreaRef' })
  calculationAreaRef: number;

  @Column({ type: 'integer', name: 'MajorDiscriminator', nullable: true })
  majorDiscriminator: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'SecondDiscriminator', nullable: true })
  secondDiscriminator: number | null;

}