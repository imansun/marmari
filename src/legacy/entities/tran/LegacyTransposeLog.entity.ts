import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransposeLog' })
export class LegacyTransposeLog {
  @PrimaryColumn({ type: 'bigint', name: 'TransposeLogID' })
  transposeLogID: number;

  @Column({ type: 'bigint', name: 'TransposeSettingRef' })
  transposeSettingRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}