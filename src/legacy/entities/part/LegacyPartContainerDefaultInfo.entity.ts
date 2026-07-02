import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartContainerDefaultInfo' })
export class LegacyPartContainerDefaultInfo {
  @PrimaryColumn({ type: 'bigint', name: 'PartContainerDefaultInfoID' })
  partContainerDefaultInfoID: number;

  @Column({ type: 'bigint', name: 'PartContainerRef' })
  partContainerRef: number;

  @Column({ type: 'bigint', name: 'PartContainerItemRef' })
  partContainerItemRef: number;

  @Column({ type: 'bigint', name: 'InventoryRef' })
  inventoryRef: number;

  @Column({ type: 'numeric', name: 'QuantityTolerance', nullable: true })
  quantityTolerance: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}