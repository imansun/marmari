import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerCarrier' })
export class LegacyCustomerCarrier {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerCarrierID' })
  customerCarrierID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}