import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourProductConflictItem' })
export class LegacyTourProductConflictItem {
  @PrimaryColumn({ type: 'bigint', name: 'TourProductConflictItemID' })
  tourProductConflictItemID: number;

  @Column({ type: 'bigint', name: 'TourProductConflictRef' })
  tourProductConflictRef: number;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

  @Column({ type: 'character varying', name: 'EntityTitle' })
  entityTitle: string;

  @Column({ type: 'character varying', name: 'ComponentName' })
  componentName: string;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'character varying', name: 'EntityNumber' })
  entityNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'EntityDate' })
  entityDate: Date;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'MajorUnitRef' })
  majorUnitRef: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}