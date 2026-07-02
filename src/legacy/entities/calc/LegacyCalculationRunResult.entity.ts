import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunResult' })
export class LegacyCalculationRunResult {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunResultID' })
  calculationRunResultID: number;

  @Column({ type: 'bigint', name: 'CalculationRunLowLevelCodingRef' })
  calculationRunLowLevelCodingRef: number;

  @Column({ type: 'integer', name: 'CalculationRunResultType' })
  calculationRunResultType: number;

  @Column({ type: 'bigint', name: 'CalculationRunResultTypeID', nullable: true })
  calculationRunResultTypeID: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'MRPElement', nullable: true })
  mRPElement: string | null;

  @Column({ type: 'character varying', name: 'MRPElementData', nullable: true })
  mRPElementData: string | null;

  @Column({ type: 'timestamp without time zone', name: 'InitialPlannedOrderStartDate', nullable: true })
  initialPlannedOrderStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InitialPlannedOrderStartDateEdit', nullable: true })
  initialPlannedOrderStartDateEdit: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InitialPlannedOrderEndDate', nullable: true })
  initialPlannedOrderEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'InitialPlannedOrderEndDateEdit', nullable: true })
  initialPlannedOrderEndDateEdit: Date | null;

  @Column({ type: 'numeric', name: 'SignQuantity', nullable: true })
  signQuantity: number | null;

  @Column({ type: 'numeric', name: 'RequirementInWayQuantity', nullable: true })
  requirementInWayQuantity: number | null;

  @Column({ type: 'numeric', name: 'RequirementInWayQuantityEdit', nullable: true })
  requirementInWayQuantityEdit: number | null;

  @Column({ type: 'numeric', name: 'AvailableQuantity', nullable: true })
  availableQuantity: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'FromPlantID', nullable: true })
  fromPlantID: number | null;

  @Column({ type: 'character varying', name: 'FromPlantName', nullable: true })
  fromPlantName: string | null;

  @Column({ type: 'bigint', name: 'BaseBomID', nullable: true })
  baseBomID: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}