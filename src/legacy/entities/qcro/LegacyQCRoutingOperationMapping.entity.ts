import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QCRoutingOperationMapping' })
export class LegacyQCRoutingOperationMapping {
  @PrimaryColumn({ type: 'bigint', name: 'QCRoutingOperationMappingID' })
  qCRoutingOperationMappingID: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef', nullable: true })
  routingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'ReferenceOperationRef', nullable: true })
  referenceOperationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}