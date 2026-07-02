import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionUnitSection' })
export class LegacyProductionUnitSection {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionUnitSectionID' })
  productionUnitSectionID: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CommissioningDate' })
  commissioningDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}