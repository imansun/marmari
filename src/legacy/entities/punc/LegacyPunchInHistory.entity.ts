import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PunchInHistory' })
export class LegacyPunchInHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PunchInHistoryID' })
  punchInHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValueModificationDate' })
  valueModificationDate: Date;

  @Column({ type: 'bigint', name: 'ExpectationRef', nullable: true })
  expectationRef: number | null;

  @Column({ type: 'bigint', name: 'KeyResultRef', nullable: true })
  keyResultRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bigint', name: 'EmployeeRef', nullable: true })
  employeeRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}