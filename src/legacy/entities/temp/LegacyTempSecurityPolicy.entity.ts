import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'temp_SecurityPolicy' })
export class LegacyTempSecurityPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'PolicyID' })
  policyID: number;

  @PrimaryColumn({ type: 'character varying', name: 'LogicalResourceKey' })
  logicalResourceKey: string;

  @PrimaryColumn({ type: 'integer', name: 'AccessType' })
  accessType: number;

  @PrimaryColumn({ type: 'bigint', name: 'UserRef' })
  userRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'EntityGroupRef' })
  entityGroupRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PositionRef' })
  positionRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Type' })
  type: number;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'integer', name: 'IsOverrided' })
  isOverrided: number;

  @PrimaryColumn({ type: 'text', name: 'RowLevelConditions' })
  rowLevelConditions: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number | null;

}