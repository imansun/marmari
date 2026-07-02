import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmptiesConflictItem' })
export class LegacyEmptiesConflictItem {
  @PrimaryColumn({ type: 'bigint', name: 'EmptiesConflictItemID' })
  emptiesConflictItemID: number;

  @Column({ type: 'bigint', name: 'EmptiesConflictRef' })
  emptiesConflictRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'integer', name: 'ConflictType' })
  conflictType: number;

  @Column({ type: 'integer', name: 'ConflictReason' })
  conflictReason: number;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'bigint', name: 'ConsigneeRef', nullable: true })
  consigneeRef: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}