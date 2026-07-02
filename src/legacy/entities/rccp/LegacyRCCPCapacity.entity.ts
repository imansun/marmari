import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCPCapacity' })
export class LegacyRCCPCapacity {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPCapacityID' })
  rCCPCapacityID: number;

  @Column({ type: 'bigint', name: 'RCCPRef' })
  rCCPRef: number;

  @Column({ type: 'character varying', name: 'CalculationTypeName', nullable: true })
  calculationTypeName: string | null;

  @Column({ type: 'character varying', name: 'WorkCenterName', nullable: true })
  workCenterName: string | null;

  @Column({ type: 'character varying', name: 'CapacityTypeTitle', nullable: true })
  capacityTypeTitle: string | null;

  @Column({ type: 'character varying', name: 'CapacityGroupName', nullable: true })
  capacityGroupName: string | null;

  @Column({ type: 'character varying', name: 'CalendarTitle', nullable: true })
  calendarTitle: string | null;

  @Column({ type: 'character varying', name: 'ShiftGroupingTitle', nullable: true })
  shiftGroupingTitle: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ShiftGroupingValidityStartDate', nullable: true })
  shiftGroupingValidityStartDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ShiftGroupingValidityEndDate', nullable: true })
  shiftGroupingValidityEndDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidFrom' })
  validFrom: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidTo', nullable: true })
  validTo: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CalculationStartDate' })
  calculationStartDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CalculationEndDate' })
  calculationEndDate: Date;

  @Column({ type: 'character varying', name: 'UnitName', nullable: true })
  unitName: string | null;

  @Column({ type: 'bigint', name: 'CalendarID', nullable: true })
  calendarID: number | null;

  @Column({ type: 'double precision', name: 'WorkDays' })
  workDays: string;

  @Column({ type: 'integer', name: 'CalculationType' })
  calculationType: number;

  @Column({ type: 'bigint', name: 'WorkCenterID' })
  workCenterID: number;

  @Column({ type: 'bigint', name: 'ShiftGroupingID' })
  shiftGroupingID: number;

  @Column({ type: 'integer', name: 'AvailableCapacity' })
  availableCapacity: number;

  @Column({ type: 'integer', name: 'TotalAvailableCapacity' })
  totalAvailableCapacity: number;

  @Column({ type: 'integer', name: 'CapacityGroup', nullable: true })
  capacityGroup: number | null;

  @Column({ type: 'bigint', name: 'CapacityTypeID' })
  capacityTypeID: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}