import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlinePaymentSimulatorStatement' })
export class LegacyOnlinePaymentSimulatorStatement {
  @PrimaryColumn({ type: 'bigint', name: 'OnlinePaymentSimulatorStatementID' })
  onlinePaymentSimulatorStatementID: number;

  @Column({ type: 'character varying', name: 'DepositNumber' })
  depositNumber: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'StatementSerial' })
  statementSerial: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'ReferenceId' })
  referenceId: string;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

}