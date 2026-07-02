import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LeaveType' })
export class LegacyLeaveType {
  @PrimaryColumn({ type: 'bigint', name: 'LeaveTypeID' })
  leaveTypeID: number;

  @Column({ type: 'character varying', name: 'Code', nullable: true })
  code: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CategoryCode' })
  categoryCode: number;

  @Column({ type: 'integer', name: 'MeasurementUnitCode' })
  measurementUnitCode: number;

  @Column({ type: 'integer', name: 'ScaleCode' })
  scaleCode: number;

  @Column({ type: 'boolean', name: 'Redeemable' })
  redeemable: boolean;

  @Column({ type: 'boolean', name: 'DefaultInRequest' })
  defaultInRequest: boolean;

  @Column({ type: 'boolean', name: 'HasSecondConfirmation' })
  hasSecondConfirmation: boolean;

  @Column({ type: 'integer', name: 'SecondConfirmMaxDays' })
  secondConfirmMaxDays: number;

  @Column({ type: 'boolean', name: 'HasThirdConfirmation' })
  hasThirdConfirmation: boolean;

  @Column({ type: 'bigint', name: 'ThirdConfirmerRef', nullable: true })
  thirdConfirmerRef: number | null;

  @Column({ type: 'boolean', name: 'VisibleInSelfService' })
  visibleInSelfService: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'DelegationRequired' })
  delegationRequired: boolean;

  @Column({ type: 'boolean', name: 'EmploymentTypeVisible' })
  employmentTypeVisible: boolean;

  @Column({ type: 'boolean', name: 'WorkingGroupVisible' })
  workingGroupVisible: boolean;

  @Column({ type: 'boolean', name: 'WorkLocationVisible' })
  workLocationVisible: boolean;

  @Column({ type: 'boolean', name: 'BranchVisible' })
  branchVisible: boolean;

  @Column({ type: 'integer', name: 'Status', default: 1 })
  status: number;

}