import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalOperatorMappingOperator' })
export class LegacyLogicalOperatorMappingOperator {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalOperatorMappingOperatorID' })
  logicalOperatorMappingOperatorID: number;

  @Column({ type: 'bigint', name: 'LogicalOperatorMappingRef' })
  logicalOperatorMappingRef: number;

  @Column({ type: 'integer', name: 'Operator' })
  operator: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}