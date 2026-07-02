import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'UtilityServiceProductionUnit' })
export class LegacyUtilityServiceProductionUnit {
  @PrimaryColumn({ type: 'bigint', name: 'UtilityServiceProductionUnitID' })
  utilityServiceProductionUnitID: number;

  @Column({ type: 'bigint', name: 'UtilityServiceRef' })
  utilityServiceRef: number;

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