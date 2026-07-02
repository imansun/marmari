import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationRTAExtension' })
export class LegacyRoutingOperationRTAExtension {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationRTAExtensionID' })
  routingOperationRTAExtensionID: number;

  @Column({ type: 'bigint', name: 'RoutingOperationResourceToolAssignmentRef' })
  routingOperationResourceToolAssignmentRef: number;

  @Column({ type: 'numeric', name: 'UsageValue', nullable: true })
  usageValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}