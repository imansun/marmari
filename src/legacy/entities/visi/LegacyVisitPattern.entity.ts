import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPattern' })
export class LegacyVisitPattern {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPatternID' })
  visitPatternID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'HasOrderTaking' })
  hasOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'HasHotSales' })
  hasHotSales: boolean;

  @Column({ type: 'boolean', name: 'HasDistribution' })
  hasDistribution: boolean;

  @Column({ type: 'boolean', name: 'HasCollection' })
  hasCollection: boolean;

  @Column({ type: 'integer', name: 'CycleType' })
  cycleType: number;

  @Column({ type: 'integer', name: 'CycleLength' })
  cycleLength: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}