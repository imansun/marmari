import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPlan' })
export class LegacyVisitPlan {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPlanID' })
  visitPlanID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'FinishDate' })
  finishDate: Date;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'boolean', name: 'HasOrderTaking' })
  hasOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'HasHotSales' })
  hasHotSales: boolean;

  @Column({ type: 'boolean', name: 'HasDistribution' })
  hasDistribution: boolean;

  @Column({ type: 'boolean', name: 'HasCollection' })
  hasCollection: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}