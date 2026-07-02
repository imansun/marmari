import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CompensationCalcType' })
export class LegacyCompensationCalcType {
  @PrimaryColumn({ type: 'bigint', name: 'CompensationCalcTypeID' })
  compensationCalcTypeID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'GroupCode' })
  groupCode: number;

  @Column({ type: 'integer', name: 'SequenceCode', nullable: true })
  sequenceCode: number | null;

  @Column({ type: 'boolean', name: 'PreventIssueStatute' })
  preventIssueStatute: boolean;

  @Column({ type: 'boolean', name: 'PreventAttendanceCalc' })
  preventAttendanceCalc: boolean;

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

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

}