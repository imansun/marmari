import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalOperatorMappingOperatorNotation' })
export class LegacyLogicalOperatorMappingOperatorNotation {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalOperatorMappingOperatorNotationID' })
  logicalOperatorMappingOperatorNotationID: number;

  @Column({ type: 'bigint', name: 'LogicalOperatorMappingOperatorRef' })
  logicalOperatorMappingOperatorRef: number;

  @Column({ type: 'character varying', name: 'Notation' })
  notation: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}