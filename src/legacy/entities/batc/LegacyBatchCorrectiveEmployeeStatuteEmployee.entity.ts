import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchCorrectiveEmployeeStatuteEmployee' })
export class LegacyBatchCorrectiveEmployeeStatuteEmployee {
  @PrimaryColumn({ type: 'bigint', name: 'BatchCorrectiveEmployeeStatuteEmployeeID' })
  batchCorrectiveEmployeeStatuteEmployeeID: number;

  @Column({ type: 'bigint', name: 'BatchCorrectiveEmployeeStatuteRef' })
  batchCorrectiveEmployeeStatuteRef: number;

  @Column({ type: 'bigint', name: 'EmployeeRef' })
  employeeRef: number;

  @Column({ type: 'character varying', name: 'StatusMessage', nullable: true })
  statusMessage: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}