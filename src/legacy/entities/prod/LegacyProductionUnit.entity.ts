import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductionUnit' })
export class LegacyProductionUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductionUnitID' })
  productionUnitID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'ComplexRef' })
  complexRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CommissioningDate' })
  commissioningDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}