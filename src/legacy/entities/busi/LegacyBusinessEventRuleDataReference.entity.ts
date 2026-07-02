import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessEventRuleDataReference' })
export class LegacyBusinessEventRuleDataReference {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessEventRuleDataReferenceID' })
  businessEventRuleDataReferenceID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'bigint', name: 'BusinessEventRuleRef' })
  businessEventRuleRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}