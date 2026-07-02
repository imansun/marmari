import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SecurityPolicy' })
export class LegacySecurityPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'PolicyID' })
  policyID: number;

  @Column({ type: 'character varying', name: 'LogicalResourceKey' })
  logicalResourceKey: string;

  @Column({ type: 'integer', name: 'AccessType' })
  accessType: number;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'EntityGroupRef', nullable: true })
  entityGroupRef: number | null;

  @Column({ type: 'bigint', name: 'PositionRef', nullable: true })
  positionRef: number | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'IsOverrided' })
  isOverrided: number;

  @Column({ type: 'text', name: 'RowLevelConditions', nullable: true })
  rowLevelConditions: string | null;

  @Column({ type: 'bigint', name: 'CompanyRef', nullable: true })
  companyRef: number | null;

}