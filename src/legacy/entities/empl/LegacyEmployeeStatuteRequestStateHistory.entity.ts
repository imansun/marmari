import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteRequestStateHistory' })
export class LegacyEmployeeStatuteRequestStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteRequestStateHistoryID' })
  employeeStatuteRequestStateHistoryID: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRequestRef' })
  employeeStatuteRequestRef: number;

  @Column({ type: 'bigint', name: 'AuditorRef', nullable: true })
  auditorRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}