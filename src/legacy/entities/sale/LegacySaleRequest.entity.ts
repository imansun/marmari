import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SaleRequest' })
export class LegacySaleRequest {
  @PrimaryColumn({ type: 'bigint', name: 'SaleRequestID' })
  saleRequestID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'CustomerType' })
  customerType: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'numeric', name: 'Price', default: 0 })
  price: number;

  @Column({ type: 'numeric', name: 'AdditionAmount', default: 0 })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount', default: 0 })
  reductionAmount: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'EffectiveNetPrice', default: 0 })
  effectiveNetPrice: number;

  @Column({ type: 'bigint', name: 'OneTimeCustomerRef', nullable: true })
  oneTimeCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'OperationalCurrencyExchangeRateIsReversed', nullable: true })
  operationalCurrencyExchangeRateIsReversed: boolean | null;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'integer', name: 'PayerType' })
  payerType: number;

  @Column({ type: 'integer', name: 'RecipientType' })
  recipientType: number;

  @Column({ type: 'bigint', name: 'RecipientRef', nullable: true })
  recipientRef: number | null;

  @Column({ type: 'bigint', name: 'RecipientPartyRef', nullable: true })
  recipientPartyRef: number | null;

  @Column({ type: 'bigint', name: 'BrokerRef', nullable: true })
  brokerRef: number | null;

  @Column({ type: 'bigint', name: 'AgentRef', nullable: true })
  agentRef: number | null;

  @Column({ type: 'bigint', name: 'PlantRef', nullable: true })
  plantRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryAddressType' })
  deliveryAddressType: number;

  @Column({ type: 'bigint', name: 'DeliveryAddressRef', nullable: true })
  deliveryAddressRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CalculationDate' })
  calculationDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'PayerAccountRef', nullable: true })
  payerAccountRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentAgreementRef', nullable: true })
  paymentAgreementRef: number | null;

  @Column({ type: 'bigint', name: 'SalesTypeRef' })
  salesTypeRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'IsQuantitative', nullable: true })
  isQuantitative: boolean | null;

  @Column({ type: 'integer', name: 'CustomerAcceptance' })
  customerAcceptance: number;

  @Column({ type: 'numeric', name: 'PrepaidAmount' })
  prepaidAmount: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'bigint', name: 'DistributionShiftRef', nullable: true })
  distributionShiftRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDate', nullable: true })
  deliveryDate: Date | null;

  @Column({ type: 'boolean', name: 'IsImported' })
  isImported: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'integer', name: 'SettlementRespite', nullable: true })
  settlementRespite: number | null;

  @Column({ type: 'boolean', name: 'IsSettlementRespiteCalculated', nullable: true })
  isSettlementRespiteCalculated: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'ReserveDate', nullable: true })
  reserveDate: Date | null;

  @Column({ type: 'boolean', name: 'DeliveryAddressAsFinal', default: false })
  deliveryAddressAsFinal: boolean;

  @Column({ type: 'integer', name: 'DeliveryMethod', nullable: true })
  deliveryMethod: number | null;

  @Column({ type: 'numeric', name: 'TotalWeight', nullable: true })
  totalWeight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'TotalVolume', nullable: true })
  totalVolume: number | null;

  @Column({ type: 'bigint', name: 'VolumeUnitRef', nullable: true })
  volumeUnitRef: number | null;

  @Column({ type: 'boolean', name: 'WithoutDistributorUnderTaker', nullable: true })
  withoutDistributorUnderTaker: boolean | null;

  @Column({ type: 'boolean', name: 'WithoutUndertaker', nullable: true })
  withoutUndertaker: boolean | null;

}