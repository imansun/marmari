import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ErrorLog' })
export class LegacyErrorLog {
  @PrimaryColumn({ type: 'bigint', name: 'ErrorLogID' })
  errorLogID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Message' })
  message: string;

  @Column({ type: 'character varying', name: 'UserName', nullable: true })
  userName: string | null;

  @Column({ type: 'smallint', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'ThreadId' })
  threadId: number;

  @Column({ type: 'character varying', name: 'ThreadName', nullable: true })
  threadName: string | null;

  @Column({ type: 'character varying', name: 'LogId', nullable: true })
  logId: string | null;

}