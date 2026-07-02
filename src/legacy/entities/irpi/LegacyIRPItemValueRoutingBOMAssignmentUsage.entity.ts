import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IRPItemValueRoutingBOMAssignmentUsage' })
export class LegacyIRPItemValueRoutingBOMAssignmentUsage {
  @PrimaryColumn({ type: 'bigint', name: 'IRPItemValueRoutingBOMAssignmentUsageID' })
  iRPItemValueRoutingBOMAssignmentUsageID: number;

  @Column({ type: 'bigint', name: 'IRPItemValueRef' })
  iRPItemValueRef: number;

  @Column({ type: 'bigint', name: 'RoutingBomAssignmentRef' })
  routingBomAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsagePercentage' })
  usagePercentage: number;

  @Column({ type: 'numeric', name: 'UsageValue' })
  usageValue: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}