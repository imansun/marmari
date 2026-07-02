import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardReconciliationReason' })
export class LegacyPettyCashCardReconciliationReason {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardReconciliationReasonID' })
  pettyCashCardReconciliationReasonID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'ShowInDebitPettyCashCardBill' })
  showInDebitPettyCashCardBill: boolean;

  @Column({ type: 'boolean', name: 'ShowInCreditPettyCashCardBill' })
  showInCreditPettyCashCardBill: boolean;

  @Column({ type: 'boolean', name: 'ShowInDebitRPATransaction' })
  showInDebitRPATransaction: boolean;

  @Column({ type: 'boolean', name: 'ShowInCreditRPATransaction' })
  showInCreditRPATransaction: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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