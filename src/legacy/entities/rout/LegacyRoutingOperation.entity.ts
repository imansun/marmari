import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RoutingOperation' })
export class LegacyRoutingOperation {
  @PrimaryColumn({ type: 'bigint', name: 'RoutingOperationID' })
  routingOperationID: number;

  @Column({ type: 'bigint', name: 'RoutingSequenceRef' })
  routingSequenceRef: number;

  @Column({ type: 'bigint', name: 'RoutingRef' })
  routingRef: number;

  @Column({ type: 'integer', name: 'UniqueID' })
  uniqueID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Rank' })
  rank: number;

  @Column({ type: 'numeric', name: 'BaseQuantity' })
  baseQuantity: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'WorkCenterRef' })
  workCenterRef: number;

  @Column({ type: 'bigint', name: 'OperationTypeRef', nullable: true })
  operationTypeRef: number | null;

  @Column({ type: 'numeric', name: 'WorkInProcessQuantity' })
  workInProcessQuantity: number;

  @Column({ type: 'numeric', name: 'ProductQuantity' })
  productQuantity: number;

  @Column({ type: 'bigint', name: 'ProductQuantityUnitRef' })
  productQuantityUnitRef: number;

  @Column({ type: 'numeric', name: 'OperationScrapInPercent', nullable: true })
  operationScrapInPercent: number | null;

  @Column({ type: 'boolean', name: 'Backflushable' })
  backflushable: boolean;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}