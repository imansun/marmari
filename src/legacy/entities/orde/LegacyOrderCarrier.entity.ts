import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderCarrier' })
export class LegacyOrderCarrier {
  @PrimaryColumn({ type: 'bigint', name: 'OrderCarrierID' })
  orderCarrierID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'boolean', name: 'IsInActive' })
  isInActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}