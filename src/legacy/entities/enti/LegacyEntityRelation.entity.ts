import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityRelation' })
export class LegacyEntityRelation {
  @PrimaryColumn({ type: 'bigint', name: 'EntityRelationID' })
  entityRelationID: number;

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

  @Column({ type: 'integer', name: 'TransformerCode', nullable: true })
  transformerCode: number | null;

  @Column({ type: 'timestamp without time zone', name: 'OperationDate' })
  operationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}