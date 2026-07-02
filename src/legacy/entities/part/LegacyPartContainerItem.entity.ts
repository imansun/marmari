import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartContainerItem' })
export class LegacyPartContainerItem {
  @PrimaryColumn({ type: 'bigint', name: 'PartContainerItemID' })
  partContainerItemID: number;

  @Column({ type: 'bigint', name: 'PartContainerRef' })
  partContainerRef: number;

  @Column({ type: 'bigint', name: 'ContainerRef' })
  containerRef: number;

  @Column({ type: 'bigint', name: 'ContainerUnitRef' })
  containerUnitRef: number;

  @Column({ type: 'bigint', name: 'EmptiesRef', nullable: true })
  emptiesRef: number | null;

  @Column({ type: 'integer', name: 'Ratio' })
  ratio: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'integer', name: 'Left' })
  left: number;

  @Column({ type: 'integer', name: 'Right' })
  right: number;

  @Column({ type: 'bigint', name: 'MainPartContainerRef', nullable: true })
  mainPartContainerRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'QuantityTolerance', nullable: true })
  quantityTolerance: number | null;

}