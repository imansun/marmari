import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PSPBillItem' })
export class LegacyPSPBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'PSPBillItemID' })
  pSPBillItemID: number;

  @Column({ type: 'bigint', name: 'PSPBillRef' })
  pSPBillRef: number;

  @Column({ type: 'character varying', name: 'TerminalNumberReceived' })
  terminalNumberReceived: string;

  @Column({ type: 'character varying', name: 'RetrivalRefNo' })
  retrivalRefNo: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'TransactionTime' })
  transactionTime: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}