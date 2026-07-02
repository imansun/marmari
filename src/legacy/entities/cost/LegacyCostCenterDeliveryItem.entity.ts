import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostCenterDeliveryItem' })
export class LegacyCostCenterDeliveryItem {
  @PrimaryColumn({ type: 'bigint', name: 'CostCenterDeliveryItemID' })
  costCenterDeliveryItemID: number;

  @Column({ type: 'bigint', name: 'CostCenterDeliveryRef' })
  costCenterDeliveryRef: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef' })
  billOfMaterialRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'QuantityInSelectedUnit' })
  quantityInSelectedUnit: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'SourceWorkstationRef' })
  sourceWorkstationRef: number;

  @Column({ type: 'integer', name: 'DestinationType' })
  destinationType: number;

  @Column({ type: 'bigint', name: 'DestinationStoreRef', nullable: true })
  destinationStoreRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationCostCenterRef', nullable: true })
  destinationCostCenterRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationWorkstationRef', nullable: true })
  destinationWorkstationRef: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}