import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Ledger' })
export class LegacyLedger {
  @PrimaryColumn({ type: 'bigint', name: 'LedgerID' })
  ledgerID: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'boolean', name: 'IsLeading' })
  isLeading: boolean;

  @Column({ type: 'boolean', name: 'IsFinancial' })
  isFinancial: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'State' })
  state: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}