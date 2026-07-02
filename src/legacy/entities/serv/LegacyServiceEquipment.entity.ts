import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ServiceEquipment' })
export class LegacyServiceEquipment {
  @PrimaryColumn({ type: 'bigint', name: 'ServiceEquipmentID' })
  serviceEquipmentID: number;

  @Column({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number;

  @Column({ type: 'bigint', name: 'EquipmentRef' })
  equipmentRef: number;

  @Column({ type: 'bigint', name: 'BomItemRef', nullable: true })
  bomItemRef: number | null;

  @Column({ type: 'integer', name: 'State', default: 1 })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'EffectiveServiceDate', nullable: true })
  effectiveServiceDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'Risk', nullable: true })
  risk: number | null;

}