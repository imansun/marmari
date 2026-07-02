import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupParameterRelation' })
export class LegacyAccountGroupParameterRelation {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupParameterRelationID' })
  accountGroupParameterRelationID: number;

  @Column({ type: 'integer', name: 'AccountGroup' })
  accountGroup: number;

  @Column({ type: 'integer', name: 'Parameter' })
  parameter: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}