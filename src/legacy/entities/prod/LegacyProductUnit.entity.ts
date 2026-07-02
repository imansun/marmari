import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductUnit' })
export class LegacyProductUnit {
  @PrimaryColumn({ type: 'bigint', name: 'ProductUnitID' })
  productUnitID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'boolean', name: 'IsInActive' })
  isInActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}