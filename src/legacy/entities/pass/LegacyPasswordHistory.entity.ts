import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PasswordHistory' })
export class LegacyPasswordHistory {
  @PrimaryColumn({ type: 'bigint', name: 'PasswordHistoryID' })
  passwordHistoryID: number;

  @Column({ type: 'timestamp without time zone', name: 'ChangeDate' })
  changeDate: Date;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'character varying', name: 'Password' })
  password: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}