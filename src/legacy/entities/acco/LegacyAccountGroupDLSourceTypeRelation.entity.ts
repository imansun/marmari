import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupDLSourceTypeRelation' })
export class LegacyAccountGroupDLSourceTypeRelation {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupDLSourceTypeRelationID' })
  accountGroupDLSourceTypeRelationID: number;

  @Column({ type: 'integer', name: 'AccountGroup' })
  accountGroup: number;

  @Column({ type: 'integer', name: 'DLSourceType' })
  dLSourceType: number;

  @Column({ type: 'integer', name: 'DLLevel', nullable: true })
  dLLevel: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}