import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalConfiguration' })
export class LegacyTransportationManagementPortalConfiguration {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalConfigurationID' })
  transportationManagementPortalConfigurationID: number;

  @Column({ type: 'bigint', name: 'AssignmentProductGroupRef' })
  assignmentProductGroupRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}