import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MRPPartExtensionRoutingBOMAssignmentUsage' })
export class LegacyMRPPartExtensionRoutingBOMAssignmentUsage {
  @PrimaryColumn({ type: 'bigint', name: 'MRPPartExtensionRoutingBOMAssignmentUsageID' })
  mRPPartExtensionRoutingBOMAssignmentUsageID: number;

  @Column({ type: 'bigint', name: 'MRPPartExtensionRef' })
  mRPPartExtensionRef: number;

  @Column({ type: 'bigint', name: 'RoutingBomAssignmentRef' })
  routingBomAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsagePercentage' })
  usagePercentage: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

}