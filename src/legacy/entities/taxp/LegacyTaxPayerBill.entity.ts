import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaxPayerBill' })
export class LegacyTaxPayerBill {
  @PrimaryColumn({ type: 'bigint', name: 'TaxPayerBillID' })
  taxPayerBillID: number;

  @Column({ type: 'bigint', name: 'TaxPayerDataLogRef', nullable: true })
  taxPayerDataLogRef: number | null;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceDate' })
  referenceDate: Date;

  @Column({ type: 'integer', name: 'ActionType' })
  actionType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'EntityNumber' })
  entityNumber: string;

  @Column({ type: 'integer', name: 'BillType' })
  billType: number;

  @Column({ type: 'integer', name: 'BillPattern' })
  billPattern: number;

  @Column({ type: 'bigint', name: 'SerialNumber', nullable: true })
  serialNumber: number | null;

  @Column({ type: 'character varying', name: 'SellerEconomicCode' })
  sellerEconomicCode: string;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'integer', name: 'CustomerType', nullable: true })
  customerType: number | null;

  @Column({ type: 'character varying', name: 'CustomerNumber', nullable: true })
  customerNumber: string | null;

  @Column({ type: 'character varying', name: 'CustomerFirstName', nullable: true })
  customerFirstName: string | null;

  @Column({ type: 'character varying', name: 'CustomerLastName', nullable: true })
  customerLastName: string | null;

  @Column({ type: 'character varying', name: 'CustomerFullName', nullable: true })
  customerFullName: string | null;

  @Column({ type: 'character varying', name: 'CustomerNationalID', nullable: true })
  customerNationalID: string | null;

  @Column({ type: 'character varying', name: 'CustomerEconomicCode', nullable: true })
  customerEconomicCode: string | null;

  @Column({ type: 'character varying', name: 'CustomsLicenseNumber', nullable: true })
  customsLicenseNumber: string | null;

  @Column({ type: 'character varying', name: 'CustomsCodePlaceOfDeclaration', nullable: true })
  customsCodePlaceOfDeclaration: string | null;

  @Column({ type: 'numeric', name: 'TotalAmountBeforeDiscount', nullable: true })
  totalAmountBeforeDiscount: number | null;

  @Column({ type: 'numeric', name: 'TotalDiscounts', nullable: true })
  totalDiscounts: number | null;

  @Column({ type: 'numeric', name: 'TotalAmountAfterDiscount', nullable: true })
  totalAmountAfterDiscount: number | null;

  @Column({ type: 'numeric', name: 'TotalTax' })
  totalTax: number;

  @Column({ type: 'numeric', name: 'TotalOtherAmounts' })
  totalOtherAmounts: number;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'integer', name: 'SettlementType', nullable: true })
  settlementType: number | null;

  @Column({ type: 'numeric', name: 'TotalLoanAmount', nullable: true })
  totalLoanAmount: number | null;

  @Column({ type: 'numeric', name: 'LoanPaymentAmount', nullable: true })
  loanPaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'TotalLoanTaxAmount', nullable: true })
  totalLoanTaxAmount: number | null;

  @Column({ type: 'numeric', name: 'TotalLoanOtherAmount', nullable: true })
  totalLoanOtherAmount: number | null;

  @Column({ type: 'numeric', name: 'TotalCashPaymentAmount', nullable: true })
  totalCashPaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'CashPaymentAmount', nullable: true })
  cashPaymentAmount: number | null;

  @Column({ type: 'numeric', name: 'TotalTaxPaymentOfCash', nullable: true })
  totalTaxPaymentOfCash: number | null;

  @Column({ type: 'numeric', name: 'TotalOtherPaymentOfCash', nullable: true })
  totalOtherPaymentOfCash: number | null;

  @Column({ type: 'character varying', name: 'UniqueBillNumber', nullable: true })
  uniqueBillNumber: string | null;

  @Column({ type: 'character varying', name: 'UniqueBillNumberRef', nullable: true })
  uniqueBillNumberRef: string | null;

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

  @Column({ type: 'uuid', name: 'SendUID', nullable: true })
  sendUID: string | null;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'character varying', name: 'FinalReferenceNumber', nullable: true })
  finalReferenceNumber: string | null;

  @Column({ type: 'character varying', name: 'ErrorMessage', nullable: true })
  errorMessage: string | null;

  @Column({ type: 'character varying', name: 'MiddlewareVersion', nullable: true })
  middlewareVersion: string | null;

  @Column({ type: 'bigint', name: 'SerialNumberRef', nullable: true })
  serialNumberRef: number | null;

  @Column({ type: 'bigint', name: 'PendingForTaxPayerBillRef', nullable: true })
  pendingForTaxPayerBillRef: number | null;

  @Column({ type: 'bigint', name: 'SourceEntityRef' })
  sourceEntityRef: number;

  @Column({ type: 'integer', name: 'SourceEntityType' })
  sourceEntityType: number;

  @Column({ type: 'integer', name: 'SourceActionType' })
  sourceActionType: number;

  @Column({ type: 'timestamp without time zone', name: 'ActualReferenceDate' })
  actualReferenceDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ActualCreationDate' })
  actualCreationDate: Date;

  @Column({ type: 'character varying', name: 'PostalCode', nullable: true })
  postalCode: string | null;

  @Column({ type: 'character varying', name: 'SellerBranchCode', nullable: true })
  sellerBranchCode: string | null;

  @Column({ type: 'character varying', name: 'BuyerBranchCode', nullable: true })
  buyerBranchCode: string | null;

  @Column({ type: 'character varying', name: 'CottageDeclarationCustomsNumber', nullable: true })
  cottageDeclarationCustomsNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CottageDeclarationCustomsDate', nullable: true })
  cottageDeclarationCustomsDate: Date | null;

  @Column({ type: 'character varying', name: 'ContractRegistrationNumber', nullable: true })
  contractRegistrationNumber: string | null;

  @Column({ type: 'numeric', name: 'TotalOfNetWeight', nullable: true })
  totalOfNetWeight: number | null;

  @Column({ type: 'numeric', name: 'TotalOfRialValue', nullable: true })
  totalOfRialValue: number | null;

  @Column({ type: 'numeric', name: 'TotalOfCurrencyValue', nullable: true })
  totalOfCurrencyValue: number | null;

  @Column({ type: 'integer', name: 'Reason', nullable: true })
  reason: number | null;

  @Column({ type: 'integer', name: 'FreeProductStatus' })
  freeProductStatus: number;

  @Column({ type: 'boolean', name: 'RecallPriceFromInvoice', nullable: true })
  recallPriceFromInvoice: boolean | null;

  @Column({ type: 'boolean', name: 'ForceCashSettlement' })
  forceCashSettlement: boolean;

  @Column({ type: 'integer', name: 'TaxpayerSystemStatus' })
  taxpayerSystemStatus: number;

  @Column({ type: 'boolean', name: 'IgnoreInCollection' })
  ignoreInCollection: boolean;

  @Column({ type: 'bigint', name: 'ManualyCreatedFor', nullable: true })
  manualyCreatedFor: number | null;

  @Column({ type: 'integer', name: 'TaxpayerSystemRejectReason', nullable: true })
  taxpayerSystemRejectReason: number | null;

  @Column({ type: 'boolean', name: 'HasNegativeAmount' })
  hasNegativeAmount: boolean;

}