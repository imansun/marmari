import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CorrectiveEmployeeStatuteStateHistory' })
export class LegacyCorrectiveEmployeeStatuteStateHistory {
  @PrimaryColumn({ type: 'bigint', name: 'CorrectiveEmployeeStatuteStateHistoryID' })
  correctiveEmployeeStatuteStateHistoryID: number;

  @Column({ type: 'bigint', name: 'CorrectiveEmployeeStatuteRef' })
  correctiveEmployeeStatuteRef: number;

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