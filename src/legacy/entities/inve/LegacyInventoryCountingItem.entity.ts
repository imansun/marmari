import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryCountingItem' })
export class LegacyInventoryCountingItem {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryCountingItemID' })
  inventoryCountingItemID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'InventoryCountingRef' })
  inventoryCountingRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'DiscrepancyPositive', nullable: true })
  discrepancyPositive: number | null;

  @Column({ type: 'numeric', name: 'DiscrepancyNegative', nullable: true })
  discrepancyNegative: number | null;

  @Column({ type: 'numeric', name: 'Count', nullable: true })
  count: number | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}