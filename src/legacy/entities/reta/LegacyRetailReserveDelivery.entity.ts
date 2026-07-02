import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailReserveDelivery' })
export class LegacyRetailReserveDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'RetailReserveDeliveryID' })
  retailReserveDeliveryID: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'RetailReserveRef' })
  retailReserveRef: number;

  @Column({ type: 'integer', name: 'DelivererType' })
  delivererType: number;

  @Column({ type: 'bigint', name: 'DelivererRef' })
  delivererRef: number;

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