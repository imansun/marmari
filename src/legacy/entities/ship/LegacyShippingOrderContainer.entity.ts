import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShippingOrderContainer' })
export class LegacyShippingOrderContainer {
  @PrimaryColumn({ type: 'bigint', name: 'ShippingOrderContainerID' })
  shippingOrderContainerID: number;

  @Column({ type: 'bigint', name: 'ShippingOrderRef' })
  shippingOrderRef: number;

  @Column({ type: 'bigint', name: 'IncomingContainerItemRef' })
  incomingContainerItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}