import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransferToTreasury' })
export class LegacyTransferToTreasury {
  @PrimaryColumn({ type: 'bigint', name: 'TransferToTreasuryID' })
  transferToTreasuryID: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'TransferDate', nullable: true })
  transferDate: Date | null;

  @Column({ type: 'character varying', name: 'LetterNumber', nullable: true })
  letterNumber: string | null;

  @Column({ type: 'character varying', name: 'CreditNumber', nullable: true })
  creditNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}