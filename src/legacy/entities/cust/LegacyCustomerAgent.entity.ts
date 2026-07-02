import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerAgent' })
export class LegacyCustomerAgent {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerAgentID' })
  customerAgentID: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'AgentRef' })
  agentRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

}