import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReconciliationReason' })
export class LegacyReconciliationReason {
  @PrimaryColumn({ type: 'bigint', name: 'ReconciliationReasonId' })
  reconciliationReasonId: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'boolean', name: 'ShowInDebitRPATransaction' })
  showInDebitRPATransaction: boolean;

  @Column({ type: 'boolean', name: 'ShowInCreditRPATransaction' })
  showInCreditRPATransaction: boolean;

  @Column({ type: 'boolean', name: 'ShowInDebitBankBill' })
  showInDebitBankBill: boolean;

  @Column({ type: 'boolean', name: 'ShowInCreditBankBill' })
  showInCreditBankBill: boolean;

  @Column({ type: 'boolean', name: 'ShowInDebitVoucherItem' })
  showInDebitVoucherItem: boolean;

  @Column({ type: 'boolean', name: 'ShowInCreditVoucherItem' })
  showInCreditVoucherItem: boolean;

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