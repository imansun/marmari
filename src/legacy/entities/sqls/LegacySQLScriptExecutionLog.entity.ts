import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SQLScriptExecutionLog' })
export class LegacySQLScriptExecutionLog {
  @PrimaryColumn({ type: 'bigint', name: 'SQLScriptExecutionLogID' })
  sQLScriptExecutionLogID: number;

  @Column({ type: 'character varying', name: 'ExecutionEvent' })
  executionEvent: string;

  @Column({ type: 'character varying', name: 'ModuleName', nullable: true })
  moduleName: string | null;

  @Column({ type: 'character varying', name: 'ComponentName', nullable: true })
  componentName: string | null;

  @Column({ type: 'character varying', name: 'ScriptFileName', nullable: true })
  scriptFileName: string | null;

  @Column({ type: 'character varying', name: 'ProductVersion', nullable: true })
  productVersion: string | null;

  @Column({ type: 'character varying', name: 'Build', nullable: true })
  build: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartTime' })
  startTime: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndTime', nullable: true })
  endTime: Date | null;

  @Column({ type: 'integer', name: 'Error' })
  error: number;

}