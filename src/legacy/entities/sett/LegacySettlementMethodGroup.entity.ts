import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SettlementMethodGroup' })
export class LegacySettlementMethodGroup {
  @PrimaryColumn({ type: 'bigint', name: 'SettlementMethodGroupID' })
  settlementMethodGroupID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'SystemDefined' })
  systemDefined: boolean;

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

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'integer', name: 'ReturnTransactionType' })
  returnTransactionType: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

}