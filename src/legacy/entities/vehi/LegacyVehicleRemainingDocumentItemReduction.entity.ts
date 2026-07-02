import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VehicleRemainingDocumentItemReduction' })
export class LegacyVehicleRemainingDocumentItemReduction {
  @PrimaryColumn({ type: 'bigint', name: 'VehicleRemainingDocumentItemReductionID' })
  vehicleRemainingDocumentItemReductionID: number;

  @Column({ type: 'bigint', name: 'VehicleRemainingDocumentItemRef' })
  vehicleRemainingDocumentItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'ReasonRef' })
  reasonRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'character varying', name: 'TransferedDocumentNumber', nullable: true })
  transferedDocumentNumber: string | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'DestinationRef', nullable: true })
  destinationRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}