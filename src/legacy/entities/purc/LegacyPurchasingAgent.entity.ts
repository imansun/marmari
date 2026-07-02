import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchasingAgent' })
export class LegacyPurchasingAgent {
  @PrimaryColumn({ type: 'bigint', name: 'PurchasingAgentID' })
  purchasingAgentID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartyRef' })
  partyRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

}