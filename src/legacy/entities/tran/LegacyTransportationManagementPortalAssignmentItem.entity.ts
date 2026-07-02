import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalAssignmentItem' })
export class LegacyTransportationManagementPortalAssignmentItem {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalAssignmentItemID' })
  transportationManagementPortalAssignmentItemID: number;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalAssignmentRef' })
  transportationManagementPortalAssignmentRef: number;

  @Column({ type: 'bigint', name: 'TransportationManagementPortalDistributionRef' })
  transportationManagementPortalDistributionRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}