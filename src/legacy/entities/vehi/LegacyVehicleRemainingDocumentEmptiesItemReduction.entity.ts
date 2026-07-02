import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VehicleRemainingDocumentEmptiesItemReduction' })
export class LegacyVehicleRemainingDocumentEmptiesItemReduction {
  @PrimaryColumn({ type: 'bigint', name: 'VehicleRemainingDocumentEmptiesItemReductionID' })
  vehicleRemainingDocumentEmptiesItemReductionID: number;

  @Column({ type: 'bigint', name: 'VehicleRemainingDocumentEmptiesItemRef' })
  vehicleRemainingDocumentEmptiesItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'ReasonRef' })
  reasonRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'character varying', name: 'TransferedDocumentNumber', nullable: true })
  transferedDocumentNumber: string | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DestinationRef', nullable: true })
  destinationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}