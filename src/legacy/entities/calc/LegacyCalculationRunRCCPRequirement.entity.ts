import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationRunRCCPRequirement' })
export class LegacyCalculationRunRCCPRequirement {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationRunRCCPRequirementID' })
  calculationRunRCCPRequirementID: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'bigint', name: 'RoutingID' })
  routingID: number;

  @Column({ type: 'numeric', name: 'RequirementCapacityQuantity' })
  requirementCapacityQuantity: number;

  @Column({ type: 'numeric', name: 'RequirementCapacityQuantityEdit', nullable: true })
  requirementCapacityQuantityEdit: number | null;

  @Column({ type: 'integer', name: 'SectionNumber' })
  sectionNumber: number;

  @Column({ type: 'bigint', name: 'WorkCenterID' })
  workCenterID: number;

  @Column({ type: 'character varying', name: 'WorkCenterName', nullable: true })
  workCenterName: string | null;

  @Column({ type: 'bigint', name: 'CapacityTypeID' })
  capacityTypeID: number;

  @Column({ type: 'character varying', name: 'CapacityTypeTitle', nullable: true })
  capacityTypeTitle: string | null;

  @Column({ type: 'integer', name: 'CapacityGroup', nullable: true })
  capacityGroup: number | null;

  @Column({ type: 'character varying', name: 'CapacityGroupName', nullable: true })
  capacityGroupName: string | null;

  @Column({ type: 'bigint', name: 'PartID' })
  partID: number;

  @Column({ type: 'character varying', name: 'PartCode', nullable: true })
  partCode: string | null;

  @Column({ type: 'character varying', name: 'PartName', nullable: true })
  partName: string | null;

  @Column({ type: 'bigint', name: 'UnitID' })
  unitID: number;

  @Column({ type: 'character varying', name: 'UnitName', nullable: true })
  unitName: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'StartDateEdit', nullable: true })
  startDateEdit: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDateEdit', nullable: true })
  endDateEdit: Date | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'numeric', name: 'QuantityEdit', nullable: true })
  quantityEdit: number | null;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceID', nullable: true })
  referenceID: number | null;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'character varying', name: 'PlannedOrderReferenceNumber', nullable: true })
  plannedOrderReferenceNumber: string | null;

  @Column({ type: 'boolean', name: 'MPSEdited', nullable: true })
  mPSEdited: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}