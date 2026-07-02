import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProcessesScheduling' })
export class LegacyProcessesScheduling {
  @PrimaryColumn({ type: 'bigint', name: 'ProcessesSchedulingID' })
  processesSchedulingID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'UniqueTitle' })
  uniqueTitle: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'CategoryTitle' })
  categoryTitle: string;

  @Column({ type: 'character varying', name: 'ActionTitle' })
  actionTitle: string;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'character varying', name: 'SchedulingRunStatus', nullable: true })
  schedulingRunStatus: string | null;

  @Column({ type: 'character varying', name: 'ActionKey' })
  actionKey: string;

  @Column({ type: 'character varying', name: 'SecurityKey' })
  securityKey: string;

  @Column({ type: 'character varying', name: 'FilteringData', nullable: true })
  filteringData: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsWizard', default: false })
  isWizard: boolean;

}