import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AppraisalPeriod' })
export class LegacyAppraisalPeriod {
  @PrimaryColumn({ type: 'bigint', name: 'AppraisalPeriodID' })
  appraisalPeriodID: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'Deadline' })
  deadline: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}