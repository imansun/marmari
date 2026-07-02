import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmployeeStatuteStateHistory' })
export class LegacyEmployeeStatuteStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'EmployeeStatuteStateHistoryID' })
  employeeStatuteStateHistoryID: number;

  @Column({ type: 'bigint', name: 'EmployeeStatuteRef' })
  employeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'AuditorRef' })
  auditorRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'integer', name: 'StatusCode' })
  statusCode: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}