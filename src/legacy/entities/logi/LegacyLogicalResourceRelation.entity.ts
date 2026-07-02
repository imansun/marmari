import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalResourceRelation' })
export class LegacyLogicalResourceRelation {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalResourceRelationID' })
  logicalResourceRelationID: number;

  @Column({ type: 'bigint', name: 'EntryRef', nullable: true })
  entryRef: number | null;

  @Column({ type: 'bigint', name: 'DirectRef', nullable: true })
  directRef: number | null;

  @Column({ type: 'bigint', name: 'ExitRef', nullable: true })
  exitRef: number | null;

  @Column({ type: 'bigint', name: 'StartRef' })
  startRef: number;

  @Column({ type: 'bigint', name: 'EndRef' })
  endRef: number;

  @Column({ type: 'integer', name: 'Hops' })
  hops: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}