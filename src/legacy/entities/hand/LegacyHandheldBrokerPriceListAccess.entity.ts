import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldBrokerPriceListAccess' })
export class LegacyHandheldBrokerPriceListAccess {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldBrokerPriceListAccessID' })
  handheldBrokerPriceListAccessID: number;

  @Column({ type: 'bigint', name: 'PriceListRef' })
  priceListRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}