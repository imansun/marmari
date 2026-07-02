import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessSimulationDefinition' })
export class LegacyProcessSimulationDefinition {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessSimulationDefinitionID' })
  processSimulationDefinitionID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationTime' })
  creationTime: Date;

  @Column({ type: 'character varying', name: 'Parameters', nullable: true })
  parameters: string | null;

  @Column({ type: 'character varying', name: 'Environment' })
  environment: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}