import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VehicleRemainingDocument' })
export class LegacyVehicleRemainingDocument {
  @PrimaryColumn({ type: 'bigint', name: 'VehicleRemainingDocumentID' })
  vehicleRemainingDocumentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef' })
  transportationVehicleRef: number;

  @Column({ type: 'bigint', name: 'TourRef', nullable: true })
  tourRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'SentFromHandheld' })
  sentFromHandheld: boolean;

  @Column({ type: 'bigint', name: 'HandheldDeliveryID', nullable: true })
  handheldDeliveryID: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}