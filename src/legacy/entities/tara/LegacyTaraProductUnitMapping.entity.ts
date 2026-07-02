import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaraProductUnitMapping' })
export class LegacyTaraProductUnitMapping {
  @PrimaryColumn({ type: 'bigint', name: 'TaraProductUnitMappingID' })
  taraProductUnitMappingID: number;

  @Column({ type: 'integer', name: 'TaraUnitRef' })
  taraUnitRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}