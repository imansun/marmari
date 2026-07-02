import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransformedQuantity' })
export class LegacyTransformedQuantity {
  @PrimaryColumn({ type: 'bigint', name: 'TransformedQuantityID' })
  transformedQuantityID: number;

  @Column({ type: 'integer', name: 'TrackerCode' })
  trackerCode: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'TransformerCode', nullable: true })
  transformerCode: number | null;

  @Column({ type: 'integer', name: 'OperationType' })
  operationType: number;

  @Column({ type: 'integer', name: 'TargetMasterType' })
  targetMasterType: number;

  @Column({ type: 'bigint', name: 'TargetMasterRef' })
  targetMasterRef: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'bigint', name: 'TargetRef' })
  targetRef: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'timestamp without time zone', name: 'OperationDate' })
  operationDate: Date;

  @Column({ type: 'text', name: 'SourceInfo', nullable: true })
  sourceInfo: string | null;

  @Column({ type: 'text', name: 'TargetInfo', nullable: true })
  targetInfo: string | null;

  @Column({ type: 'bigint', name: 'SourceInfoID1', nullable: true })
  sourceInfoID1: number | null;

  @Column({ type: 'bigint', name: 'SourceInfoID2', nullable: true })
  sourceInfoID2: number | null;

  @Column({ type: 'bigint', name: 'TargetInfoID1', nullable: true })
  targetInfoID1: number | null;

  @Column({ type: 'bigint', name: 'TargetInfoID2', nullable: true })
  targetInfoID2: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}