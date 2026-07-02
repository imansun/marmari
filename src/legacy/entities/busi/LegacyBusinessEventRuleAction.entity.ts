import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessEventRuleAction' })
export class LegacyBusinessEventRuleAction {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessEventRuleActionID' })
  businessEventRuleActionID: number;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'uuid', name: 'UniqueId' })
  uniqueId: string;

  @Column({ type: 'integer', name: 'DefinitionType' })
  definitionType: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'character varying', name: 'EventServiceTypeName' })
  eventServiceTypeName: string;

  @Column({ type: 'character varying', name: 'EventName' })
  eventName: string;

  @Column({ type: 'bigint', name: 'BusinessRuleRef' })
  businessRuleRef: number;

  @Column({ type: 'bigint', name: 'BusinessActionRef' })
  businessActionRef: number;

  @Column({ type: 'boolean', name: 'IsAdvisor' })
  isAdvisor: boolean;

  @Column({ type: 'boolean', name: 'IsDeleted' })
  isDeleted: boolean;

  @Column({ type: 'bytea', name: 'Signature', nullable: true })
  signature: Buffer | null;

  @Column({ type: 'timestamp without time zone', name: 'SignatureExpires', nullable: true })
  signatureExpires: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'ExtraData', nullable: true })
  extraData: string | null;

  @Column({ type: 'integer', name: 'EventExecutionPriority', default: 0 })
  eventExecutionPriority: number;

  @Column({ type: 'boolean', name: 'IsOfflineMode', default: false })
  isOfflineMode: boolean;

}