import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TankStrapping' })
export class LegacyTankStrapping {
  @PrimaryColumn({ type: 'bigint', name: 'TankStrappingID' })
  tankStrappingID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'TankRef' })
  tankRef: number;

  @Column({ type: 'smallint', name: 'StrappingUnit' })
  strappingUnit: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}