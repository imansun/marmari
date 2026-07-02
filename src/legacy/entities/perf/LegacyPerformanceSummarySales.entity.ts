import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PerformanceSummarySales' })
export class LegacyPerformanceSummarySales {
  @PrimaryColumn({ type: 'bigint', name: 'PerformanceSummarySalesID' })
  performanceSummarySalesID: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryRef' })
  performanceSummaryRef: number;

  @Column({ type: 'bigint', name: 'ManagerRef', nullable: true })
  managerRef: number | null;

  @Column({ type: 'bigint', name: 'SupervisorRef', nullable: true })
  supervisorRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', name: 'ParentCustomerRef', nullable: true })
  parentCustomerRef: number | null;

  @Column({ type: 'bigint', name: 'SalesAgentRef', nullable: true })
  salesAgentRef: number | null;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'CashierRef', nullable: true })
  cashierRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'bigint', name: 'RetailDocumentPatternRef', nullable: true })
  retailDocumentPatternRef: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Price' })
  price: number;

  @Column({ type: 'numeric', name: 'Discount' })
  discount: number;

  @Column({ type: 'numeric', name: 'MiscReductionAmount' })
  miscReductionAmount: number;

  @Column({ type: 'numeric', name: 'Tax' })
  tax: number;

  @Column({ type: 'numeric', name: 'Duty' })
  duty: number;

  @Column({ type: 'numeric', name: 'MiscAdditionAmount' })
  miscAdditionAmount: number;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'FreeProductDiscount' })
  freeProductDiscount: number;

  @Column({ type: 'bigint', name: 'PerformanceSummaryPatternSalesRef' })
  performanceSummaryPatternSalesRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SalesAreaRef', nullable: true })
  salesAreaRef: number | null;

}