import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalShippingOrderRelation' })
export class LegacyTransportationManagementPortalShippingOrderRelation {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalShippingOrderRelationID' })
  transportationManagementPortalShippingOrderRelationID: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'bigint', name: 'ShippingOrderRef' })
  shippingOrderRef: number;

  @Column({ type: 'bigint', name: 'ShippingOrderItemRef' })
  shippingOrderItemRef: number;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalAssignmentRef', nullable: true })
  transportationManagementPortalAssignmentRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalAssignmentItemRef', nullable: true })
  transportationManagementPortalAssignmentItemRef: number | null;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalDistributionRef', nullable: true })
  transportationManagementPortalDistributionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}