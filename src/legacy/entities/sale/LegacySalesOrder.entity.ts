import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrder' })
export class LegacySalesOrder {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderID' })
  salesOrderID: number;

  @Column({ type: 'uuid', name: 'UniqueID' })
  uniqueID: string;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'CurrencyExchangeRate' })
  currencyExchangeRate: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DayDate' })
  dayDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CalculationDate', nullable: true })
  calculationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate', nullable: true })
  expirationDate: Date | null;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'SalesAgentRef', nullable: true })
  salesAgentRef: number | null;

  @Column({ type: 'integer', name: 'PayerType', nullable: true })
  payerType: number | null;

  @Column({ type: 'bigint', name: 'InventoryRef', nullable: true })
  inventoryRef: number | null;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef' })
  retailDocumentPatternRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'AdditionAmount' })
  additionAmount: number;

  @Column({ type: 'numeric', name: 'ReductionAmount' })
  reductionAmount: number;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef', nullable: true })
  settlementPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'RetailSessionRef' })
  retailSessionRef: number;

  @Column({ type: 'bigint', name: 'CashierRef' })
  cashierRef: number;

  @Column({ type: 'bigint', name: 'CashRegisterRef' })
  cashRegisterRef: number;

  @Column({ type: 'character varying', name: 'IncludedPolicies', nullable: true })
  includedPolicies: string | null;

  @Column({ type: 'character varying', name: 'ExcludedPolicies', nullable: true })
  excludedPolicies: string | null;

  @Column({ type: 'bigint', name: 'PayerAccountRef', nullable: true })
  payerAccountRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef', nullable: true })
  customerSettlementRef: number | null;

  @Column({ type: 'integer', name: 'BillIssueTime' })
  billIssueTime: number;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'RejectingReasonRef', nullable: true })
  rejectingReasonRef: number | null;

  @Column({ type: 'bigint', name: 'ClosingReasonRef', nullable: true })
  closingReasonRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastCalculationDate' })
  lastCalculationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

  @Column({ type: 'boolean', name: 'IsLocked', nullable: true })
  isLocked: boolean | null;

  @Column({ type: 'bigint', name: 'DocumentDeliveryRef', nullable: true })
  documentDeliveryRef: number | null;

}