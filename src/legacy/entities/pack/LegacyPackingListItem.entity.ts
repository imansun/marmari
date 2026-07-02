import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PackingListItem' })
export class LegacyPackingListItem {
  @PrimaryColumn({ type: 'bigint', name: 'PackingListItemID' })
  packingListItemID: number;

  @Column({ type: 'bigint', name: 'PackingListRef' })
  packingListRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'PackageRef' })
  packageRef: number;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'bigint', name: 'DimensionUnitRef', nullable: true })
  dimensionUnitRef: number | null;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}