import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPatternDate' })
export class LegacyVisitPatternDate {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPatternDateID' })
  visitPatternDateID: number;

  @Column({ type: 'bigint', name: 'VisitPatternRef' })
  visitPatternRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}