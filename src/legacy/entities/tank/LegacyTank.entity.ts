import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Tank' })
export class LegacyTank {
  @PrimaryColumn({ type: 'bigint', name: 'TankID' })
  tankID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ProductionUnitSectionRef' })
  productionUnitSectionRef: number;

  @Column({ type: 'integer', name: 'TankShape' })
  tankShape: number;

  @Column({ type: 'timestamp without time zone', name: 'CommissioningDate' })
  commissioningDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'DIPMethod' })
  dIPMethod: number;

  @Column({ type: 'integer', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'integer', name: 'UsageType' })
  usageType: number;

  @Column({ type: 'integer', name: 'Diameter', nullable: true })
  diameter: number | null;

  @Column({ type: 'numeric', name: 'MaximumVolume', nullable: true })
  maximumVolume: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CleanDate', nullable: true })
  cleanDate: Date | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}