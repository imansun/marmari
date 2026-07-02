import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductProductionUnit' })
export class LegacyProductProductionUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductProductionUnitID' })
  productProductionUnitID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ComplexRef' })
  complexRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitSectionRef', nullable: true })
  productionUnitSectionRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActivationDate' })
  activationDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}