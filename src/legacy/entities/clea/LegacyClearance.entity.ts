import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Clearance' })
export class LegacyClearance {
  @PrimaryColumn({ type: 'bigint', name: 'ClearanceID' })
  clearanceID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'ClearanceDate' })
  clearanceDate: Date;

  @Column({ type: 'bigint', name: 'EntryCustomsRef', nullable: true })
  entryCustomsRef: number | null;

  @Column({ type: 'bigint', name: 'CustomsBrokerRef', nullable: true })
  customsBrokerRef: number | null;

  @Column({ type: 'bigint', name: 'DestinationCustomsRef', nullable: true })
  destinationCustomsRef: number | null;

  @Column({ type: 'character varying', name: 'GreenPermitNO', nullable: true })
  greenPermitNO: string | null;

  @Column({ type: 'timestamp without time zone', name: 'GreenPermitNODate', nullable: true })
  greenPermitNODate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

  @Column({ type: 'bigint', name: 'DraftVoucherRef', nullable: true })
  draftVoucherRef: number | null;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'numeric', name: 'Cost', nullable: true })
  cost: number | null;

  @Column({ type: 'numeric', name: 'Insurance', nullable: true })
  insurance: number | null;

  @Column({ type: 'numeric', name: 'Freight', nullable: true })
  freight: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

}