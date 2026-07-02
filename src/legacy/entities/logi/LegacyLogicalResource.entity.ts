import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LogicalResource' })
export class LegacyLogicalResource {
  @PrimaryColumn({ type: 'bigint', name: 'LogicalResourceID' })
  logicalResourceID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'integer', name: 'OperationType', nullable: true })
  operationType: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'CanHaveRecordLevel' })
  canHaveRecordLevel: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'EntityTypeName', nullable: true })
  entityTypeName: string | null;

  @Column({ type: 'character varying', name: 'ComponentName', nullable: true })
  componentName: string | null;

}