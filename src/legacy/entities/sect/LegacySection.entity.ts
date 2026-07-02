import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Section' })
export class LegacySection {
  @PrimaryColumn({ type: 'bigint', name: 'SectionID' })
  sectionID: number;

  @Column({ type: 'bigint', name: 'ZoneRef' })
  zoneRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}