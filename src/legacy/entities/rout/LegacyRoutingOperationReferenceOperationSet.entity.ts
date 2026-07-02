import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperationReferenceOperationSet' })
export class LegacyRoutingOperationReferenceOperationSet {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationReferenceOperationSetID' })
  routingOperationReferenceOperationSetID: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef' })
  routingOperationRef: number;

  @Column({ type: 'bigint', name: 'ReferenceOperationSetRef' })
  referenceOperationSetRef: number;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}