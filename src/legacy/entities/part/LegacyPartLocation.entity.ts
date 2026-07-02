import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartLocation' })
export class LegacyPartLocation {
  @PrimaryColumn({ type: 'bigint', name: 'PartLocationID' })
  partLocationID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'StoreStructureRef' })
  storeStructureRef: number;

  @Column({ type: 'bigint', name: 'ZoneRef', nullable: true })
  zoneRef: number | null;

  @Column({ type: 'bigint', name: 'SectionRef', nullable: true })
  sectionRef: number | null;

  @Column({ type: 'bigint', name: 'ShelfRef', nullable: true })
  shelfRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}