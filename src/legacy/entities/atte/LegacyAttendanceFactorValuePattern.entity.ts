import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AttendanceFactorValuePattern' })
export class LegacyAttendanceFactorValuePattern {
  @PrimaryColumn({ type: 'bigint', name: 'AttendanceFactorValuePatternID' })
  attendanceFactorValuePatternID: number;

  @Column({ type: 'integer', name: 'Scale' })
  scale: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'FirstLevelGroup' })
  firstLevelGroup: string;

  @Column({ type: 'character varying', name: 'SecondLevelGroup', nullable: true })
  secondLevelGroup: string | null;

  @Column({ type: 'character varying', name: 'ThirdLevelGroup', nullable: true })
  thirdLevelGroup: string | null;

  @Column({ type: 'integer', name: 'FirstLevelSortKey' })
  firstLevelSortKey: number;

  @Column({ type: 'integer', name: 'SecondLevelSortKey', nullable: true })
  secondLevelSortKey: number | null;

  @Column({ type: 'integer', name: 'ThirdLevelSortKey', nullable: true })
  thirdLevelSortKey: number | null;

  @Column({ type: 'integer', name: 'FirstLevelSortTrend' })
  firstLevelSortTrend: number;

  @Column({ type: 'integer', name: 'SecondLevelSortTrend', nullable: true })
  secondLevelSortTrend: number | null;

  @Column({ type: 'integer', name: 'ThirdLevelSortTrend', nullable: true })
  thirdLevelSortTrend: number | null;

  @Column({ type: 'integer', name: 'FirstLevelFunction', nullable: true })
  firstLevelFunction: number | null;

  @Column({ type: 'integer', name: 'SecondLevelFunction', nullable: true })
  secondLevelFunction: number | null;

  @Column({ type: 'integer', name: 'ThirdLevelFunction', nullable: true })
  thirdLevelFunction: number | null;

  @Column({ type: 'integer', name: 'BaseDate' })
  baseDate: number;

  @Column({ type: 'integer', name: 'PatternLevel' })
  patternLevel: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsInShellLevel', default: true })
  isInShellLevel: boolean;

  @Column({ type: 'boolean', name: 'IsInManagerSelfServiceLevel', default: false })
  isInManagerSelfServiceLevel: boolean;

  @Column({ type: 'boolean', name: 'IsInEmployeeSelfServiceLevel', default: false })
  isInEmployeeSelfServiceLevel: boolean;

}