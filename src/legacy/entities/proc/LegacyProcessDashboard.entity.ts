import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessDashboard' })
export class LegacyProcessDashboard {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessDashboardID' })
  processDashboardID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Data' })
  data: string;

  @Column({ type: 'timestamp without time zone', name: 'ModificationTime' })
  modificationTime: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}