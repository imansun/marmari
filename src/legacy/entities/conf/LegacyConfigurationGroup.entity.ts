import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfigurationGroup' })
export class LegacyConfigurationGroup {
  @PrimaryColumn({ type: 'bigint', name: 'ConfigurationGroupID' })
  configurationGroupID: number;

  @Column({ type: 'character varying', name: 'Path' })
  path: string;

  @Column({ type: 'bigint', name: 'ParentConfigurationGroupRef', nullable: true })
  parentConfigurationGroupRef: number | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}