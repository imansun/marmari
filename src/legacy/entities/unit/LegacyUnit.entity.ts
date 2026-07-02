import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Unit' })
export class LegacyUnit {
  @PrimaryColumn({ type: 'bigint', name: 'UnitID' })
  unitID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'AbbreviatedName', nullable: true })
  abbreviatedName: string | null;

  @Column({ type: 'integer', name: 'Dimension' })
  dimension: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}