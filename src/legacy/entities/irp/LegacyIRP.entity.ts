import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IRP' })
export class LegacyIRP {
  @PrimaryColumn({ type: 'bigint', name: 'IRPID' })
  iRPID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'integer', name: 'DurationType' })
  durationType: number;

  @Column({ type: 'integer', name: 'Frequency' })
  frequency: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'integer', name: 'IRPGrouping', nullable: true })
  iRPGrouping: number | null;

  @Column({ type: 'bigint', name: 'IRPProgramRef', nullable: true })
  iRPProgramRef: number | null;

  @Column({ type: 'boolean', name: 'MatchesTheCalendar', nullable: true })
  matchesTheCalendar: boolean | null;

}