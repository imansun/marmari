import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailInteriorSectionBroker' })
export class LegacyRetailInteriorSectionBroker {
  @PrimaryColumn({ type: 'bigint', name: 'RetailInteriorSectionBrokerID' })
  retailInteriorSectionBrokerID: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef' })
  retailInteriorSectionRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'BrokerSalesEmployeeRoleRef' })
  brokerSalesEmployeeRoleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}