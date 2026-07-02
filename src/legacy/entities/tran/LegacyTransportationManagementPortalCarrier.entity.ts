import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalCarrier' })
export class LegacyTransportationManagementPortalCarrier {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalCarrierID' })
  transportationManagementPortalCarrierID: number;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'boolean', name: 'LoadDistributor' })
  loadDistributor: boolean;

  @Column({ type: 'boolean', name: 'LoadAllocator' })
  loadAllocator: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'UnPlannedOrderItemAdder', default: true })
  unPlannedOrderItemAdder: boolean;

}