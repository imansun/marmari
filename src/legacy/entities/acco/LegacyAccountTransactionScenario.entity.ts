import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountTransactionScenario' })
export class LegacyAccountTransactionScenario {
  @PrimaryColumn({ type: 'bigint', name: 'AccountTransactionScenarioID' })
  accountTransactionScenarioID: number;

  @Column({ type: 'bigint', name: 'AccountRef' })
  accountRef: number;

  @Column({ type: 'integer', name: 'TransactionScenario' })
  transactionScenario: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}