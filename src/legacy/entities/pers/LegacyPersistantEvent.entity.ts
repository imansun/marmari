import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PersistantEvent' })
export class LegacyPersistantEvent {
  @PrimaryColumn({ type: 'bigint', name: 'PersistantEventID' })
  persistantEventID: number;

  @Column({ type: 'character varying', name: 'InvokerService' })
  invokerService: string;

  @Column({ type: 'character varying', name: 'EventName' })
  eventName: string;

  @Column({ type: 'bytea', name: 'EventArgs' })
  eventArgs: Buffer;

  @Column({ type: 'integer', name: 'InvokerSiteID' })
  invokerSiteID: number;

  @Column({ type: 'boolean', name: 'IsHandled' })
  isHandled: boolean;

}