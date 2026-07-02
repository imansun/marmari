import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLTypeRelation' })
export class LegacyDLTypeRelation {
  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRelationID' })
  dLTypeRelationID: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'integer', name: 'Level' })
  level: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'boolean', name: 'HasNatureControl' })
  hasNatureControl: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}