import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessAdministrator' })
export class LegacyProcessAdministrator {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessAdministratorID' })
  processAdministratorID: number;

  @Column({ type: 'bigint', name: 'ProcessDefinitionRef' })
  processDefinitionRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}