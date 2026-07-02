import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RecursiveEntityRelation' })
export class LegacyRecursiveEntityRelation {
  @PrimaryColumn({ type: 'bigint', name: 'RecursiveEntityRelationID' })
  recursiveEntityRelationID: number;

  @Column({ type: 'bigint', name: 'EntryRef' })
  entryRef: number;

  @Column({ type: 'bigint', name: 'DirectRef' })
  directRef: number;

  @Column({ type: 'bigint', name: 'ExitRef' })
  exitRef: number;

  @Column({ type: 'bigint', name: 'StartRelationRef' })
  startRelationRef: number;

  @Column({ type: 'bigint', name: 'EndRelationRef' })
  endRelationRef: number;

  @Column({ type: 'integer', name: 'Depth' })
  depth: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'TargetRef' })
  targetRef: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}