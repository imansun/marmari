import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommittedBank' })
export class LegacyCommittedBank {
  @PrimaryColumn({ type: 'bigint', name: 'CommittedBankID' })
  committedBankID: number;

  @Column({ type: 'bigint', name: 'ParentRef' })
  parentRef: number;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}