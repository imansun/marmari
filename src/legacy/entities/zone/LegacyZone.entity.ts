import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Zone' })
export class LegacyZone {
  @PrimaryColumn({ type: 'bigint', name: 'ZoneID' })
  zoneID: number;

  @Column({ type: 'bigint', name: 'StoreStructureRef' })
  storeStructureRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}