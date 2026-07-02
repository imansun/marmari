import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceivableNoteAccountTransactionScenario' })
export class LegacyReceivableNoteAccountTransactionScenario {
  @PrimaryColumn({ type: 'bigint', name: 'ReceivableNoteAccountTransactionScenarioID' })
  receivableNoteAccountTransactionScenarioID: number;

  @Column({ type: 'bigint', name: 'ReceivableNoteRef' })
  receivableNoteRef: number;

  @Column({ type: 'integer', name: 'TransactionScenario' })
  transactionScenario: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}