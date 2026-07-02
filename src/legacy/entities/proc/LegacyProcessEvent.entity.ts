import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessEvent' })
export class LegacyProcessEvent {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessEventID' })
  processEventID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionRef' })
  processDefinitionRef: number;

  @Column({ type: 'character varying', name: 'InterfaceName' })
  interfaceName: string;

  @Column({ type: 'character varying', name: 'EventName' })
  eventName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}