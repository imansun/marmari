import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingScrapAssignment' })
export class LegacyRoutingScrapAssignment {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingScrapAssignmentID' })
  routingScrapAssignmentID: number;

  @Column({ type: 'integer', name: 'Number' })
  number: number;

  @Column({ type: 'bigint', name: 'BomScrapRef' })
  bomScrapRef: number;

  @Column({ type: 'bigint', name: 'RoutingOperationRef', nullable: true })
  routingOperationRef: number | null;

  @Column({ type: 'bigint', name: 'RoutingBomAssignmentRef' })
  routingBomAssignmentRef: number;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'boolean', name: 'AutomaticReceiptPermit' })
  automaticReceiptPermit: boolean;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapInventoryVoucherSpecificationRef', nullable: true })
  scrapInventoryVoucherSpecificationRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}