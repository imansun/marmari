import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FlowMeter' })
export class LegacyFlowMeter {
  @PrimaryColumn({ type: 'bigint', name: 'FlowMeterID' })
  flowMeterID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'ComplexRef' })
  complexRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitRef' })
  productionUnitRef: number;

  @Column({ type: 'bigint', name: 'ProductionUnitSectionRef' })
  productionUnitSectionRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef', nullable: true })
  equipmentRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'timestamp without time zone', name: 'InstallationDate' })
  installationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'FlowMeterType' })
  flowMeterType: number;

  @Column({ type: 'numeric', name: 'MaximumReading', nullable: true })
  maximumReading: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CallibrationDate', nullable: true })
  callibrationDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}