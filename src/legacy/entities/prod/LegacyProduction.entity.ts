import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Production' })
export class LegacyProduction {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionID' })
  productionID: number;

  @Column({ type: 'bigint', name: 'CalcPeriodRef' })
  calcPeriodRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'boolean', name: 'IsJointProduct' })
  isJointProduct: boolean;

  @Column({ type: 'boolean', name: 'IsGroupingProduct' })
  isGroupingProduct: boolean;

  @Column({ type: 'bigint', name: 'ServiceRef', nullable: true })
  serviceRef: number | null;

  @Column({ type: 'numeric', name: 'NormalWastagePercentage' })
  normalWastagePercentage: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'numeric', name: 'LabourTime' })
  labourTime: number;

  @Column({ type: 'numeric', name: 'OverheadTime' })
  overheadTime: number;

  @Column({ type: 'numeric', name: 'PlanningServiceCount', nullable: true })
  planningServiceCount: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsRecycling' })
  isRecycling: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}