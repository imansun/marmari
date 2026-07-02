import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Account' })
export class LegacyAccount {
  @PrimaryColumn({ type: 'bigint', name: 'AccountID' })
  accountID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'SecondTitle', nullable: true })
  secondTitle: string | null;

  @Column({ type: 'bigint', name: 'OwnerID' })
  ownerID: number;

  @Column({ type: 'integer', name: 'OwnerType' })
  ownerType: number;

  @Column({ type: 'character varying', name: 'OwnerCodeProperty', nullable: true })
  ownerCodeProperty: string | null;

  @Column({ type: 'bigint', name: 'ScopeOwnerRef' })
  scopeOwnerRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'AccountTypeRef' })
  accountTypeRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'integer', name: 'EffectScope' })
  effectScope: number;

  @Column({ type: 'numeric', name: 'DebitBalance' })
  debitBalance: number;

  @Column({ type: 'numeric', name: 'CreditBalance' })
  creditBalance: number;

  @Column({ type: 'numeric', name: 'Balance' })
  balance: number;

  @Column({ type: 'numeric', name: 'OnCreditCreditBalance', nullable: true })
  onCreditCreditBalance: number | null;

  @Column({ type: 'numeric', name: 'OnCreditDebitBalance', nullable: true })
  onCreditDebitBalance: number | null;

  @Column({ type: 'numeric', name: 'OnCreditBalance', nullable: true })
  onCreditBalance: number | null;

  @Column({ type: 'numeric', name: 'DebitReserve' })
  debitReserve: number;

  @Column({ type: 'numeric', name: 'CreditReserve' })
  creditReserve: number;

  @Column({ type: 'numeric', name: 'ReserveBalance' })
  reserveBalance: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsAutomatic', default: false })
  isAutomatic: boolean;

}