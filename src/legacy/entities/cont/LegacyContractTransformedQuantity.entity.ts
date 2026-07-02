import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContractTransformedQuantity' })
export class LegacyContractTransformedQuantity {
  @PrimaryColumn({ type: 'bigint', name: 'ContractTransformedQuantityID' })
  contractTransformedQuantityID: number;

  @Column({ type: 'bigint', name: 'EntityRelationID' })
  entityRelationID: number;

  @Column({ type: 'bigint', name: 'SourceID' })
  sourceID: number;

  @Column({ type: 'bigint', name: 'SourceProductRef', nullable: true })
  sourceProductRef: number | null;

  @Column({ type: 'bigint', name: 'SourceProductGroupRef', nullable: true })
  sourceProductGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SourceUnitRef' })
  sourceUnitRef: number;

  @Column({ type: 'bigint', name: 'TargetProductRef', nullable: true })
  targetProductRef: number | null;

  @Column({ type: 'bigint', name: 'TargetUnitRef' })
  targetUnitRef: number;

  @Column({ type: 'numeric', name: 'TargetValue' })
  targetValue: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}