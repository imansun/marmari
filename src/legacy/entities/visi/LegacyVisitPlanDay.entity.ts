import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VisitPlanDay' })
export class LegacyVisitPlanDay {
  @PrimaryColumn({ type: 'bigint', name: 'VisitPlanDayID' })
  visitPlanDayID: number;

  @Column({ type: 'bigint', name: 'VisitPlanRef' })
  visitPlanRef: number;

  @Column({ type: 'timestamp without time zone', name: 'VisitDay' })
  visitDay: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}