import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TerminalPrintSetting' })
export class LegacyTerminalPrintSetting {
  @PrimaryColumn({ type: 'bigint', name: 'TerminalPrintSettingID' })
  terminalPrintSettingID: number;

  @Column({ type: 'bigint', name: 'TerminalRef' })
  terminalRef: number;

  @Column({ type: 'character varying', name: 'ReportName' })
  reportName: string;

  @Column({ type: 'boolean', name: 'CanPrint' })
  canPrint: boolean;

  @Column({ type: 'boolean', name: 'PrintOnSave', nullable: true })
  printOnSave: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'NumberOfPrint', default: 1 })
  numberOfPrint: number;

}