import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRun' })
export class LegacyCalculationRun {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunID' })
  calculationRunID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'CalculationState', nullable: true })
  calculationState: number | null;

  @Column({ type: 'bigint', name: 'CalculationScenarioRef' })
  calculationScenarioRef: number;

  @Column({ type: 'integer', name: 'CalculationRunType' })
  calculationRunType: number;

  @Column({ type: 'timestamp without time zone', name: 'CalculationStartTime', nullable: true })
  calculationStartTime: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CalculationEndTime', nullable: true })
  calculationEndTime: Date | null;

  @Column({ type: 'boolean', name: 'PartInventory', nullable: true })
  partInventory: boolean | null;

  @Column({ type: 'boolean', name: 'PlannedOrderInway', nullable: true })
  plannedOrderInway: boolean | null;

  @Column({ type: 'boolean', name: 'ProductionOrderInway', nullable: true })
  productionOrderInway: boolean | null;

  @Column({ type: 'boolean', name: 'PurchaseRequestInway', nullable: true })
  purchaseRequestInway: boolean | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'SaveJobID', nullable: true })
  saveJobID: number | null;

  @Column({ type: 'integer', name: 'SaveJobStatus', nullable: true })
  saveJobStatus: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}