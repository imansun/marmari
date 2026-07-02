import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummaryPattern' })
export class LegacyPerformanceSummaryPattern {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummaryPatternID' })
  performanceSummaryPatternID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'boolean', name: 'SystemDefined' })
  systemDefined: boolean;

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