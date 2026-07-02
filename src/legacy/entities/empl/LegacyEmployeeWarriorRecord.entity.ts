import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeWarriorRecord' })
export class LegacyEmployeeWarriorRecord {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeWarriorRecordID' })
  employeeWarriorRecordID: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'integer', name: 'StatusCode', nullable: true })
  statusCode: number | null;

  @Column({ type: 'character varying', name: 'WarPlace', nullable: true })
  warPlace: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'Duration', nullable: true })
  duration: number | null;

  @Column({ type: 'integer', name: 'EncouragementGroup', nullable: true })
  encouragementGroup: number | null;

  @Column({ type: 'integer', name: 'ActivityLevelCode', nullable: true })
  activityLevelCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveDate' })
  effectiveDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'FileName', nullable: true })
  fileName: string | null;

  @Column({ type: 'bytea', name: 'FileContents', nullable: true })
  fileContents: Buffer | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'integer', name: 'WarriorGroupCode', nullable: true })
  warriorGroupCode: number | null;

  @Column({ type: 'integer', name: 'MartyrRelationCode', nullable: true })
  martyrRelationCode: number | null;

  @Column({ type: 'integer', name: 'MartyrRelationGradeCode', nullable: true })
  martyrRelationGradeCode: number | null;

  @Column({ type: 'numeric', name: 'SacrificePercent', nullable: true })
  sacrificePercent: number | null;

  @Column({ type: 'integer', name: 'SacrificeExemptionAmount', nullable: true })
  sacrificeExemptionAmount: number | null;

  @Column({ type: 'integer', name: 'SacrificeLeaveAmountInMonth', nullable: true })
  sacrificeLeaveAmountInMonth: number | null;

  @Column({ type: 'integer', name: 'SacrificeLeaveAmountInYear', nullable: true })
  sacrificeLeaveAmountInYear: number | null;

  @Column({ type: 'integer', name: 'SacrificeOverworkAmount', nullable: true })
  sacrificeOverworkAmount: number | null;

  @Column({ type: 'integer', name: 'Extra1Code', nullable: true })
  extra1Code: number | null;

  @Column({ type: 'integer', name: 'Extra2Code', nullable: true })
  extra2Code: number | null;

}