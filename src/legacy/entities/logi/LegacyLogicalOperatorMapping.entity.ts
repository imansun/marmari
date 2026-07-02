import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalOperatorMapping' })
export class LegacyLogicalOperatorMapping {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalOperatorMappingID' })
  logicalOperatorMappingID: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}