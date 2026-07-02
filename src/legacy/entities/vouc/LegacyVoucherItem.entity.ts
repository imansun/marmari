import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherItem' })
export class LegacyVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @Column({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AccountGroupRef' })
  accountGroupRef: number;

  @Column({ type: 'bigint', name: 'GLRef' })
  gLRef: number;

  @Column({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @Column({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyRef', nullable: true })
  baseCurrencyRef: number | null;

  @Column({ type: 'bigint', name: 'TargetCurrencyRef', nullable: true })
  targetCurrencyRef: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyDebit', nullable: true })
  targetCurrencyDebit: number | null;

  @Column({ type: 'numeric', name: 'TargetCurrencyCredit', nullable: true })
  targetCurrencyCredit: number | null;

  @Column({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef', nullable: true })
  baseCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'BaseCurrencyExchangeRate', nullable: true })
  baseCurrencyExchangeRate: number | null;

  @Column({ type: 'numeric', name: 'CurrencyDebit', nullable: true })
  currencyDebit: number | null;

  @Column({ type: 'numeric', name: 'CurrencyCredit', nullable: true })
  currencyCredit: number | null;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character varying', name: 'FollowUpNumber', nullable: true })
  followUpNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'FollowUpDate', nullable: true })
  followUpDate: Date | null;

  @Column({ type: 'numeric', name: 'Quantity', nullable: true })
  quantity: number | null;

  @Column({ type: 'character varying', name: 'DLLevel4', nullable: true })
  dLLevel4: string | null;

  @Column({ type: 'character varying', name: 'DLLevel5', nullable: true })
  dLLevel5: string | null;

  @Column({ type: 'character varying', name: 'DLLevel6', nullable: true })
  dLLevel6: string | null;

  @Column({ type: 'character varying', name: 'DLLevel7', nullable: true })
  dLLevel7: string | null;

  @Column({ type: 'character varying', name: 'DLLevel8', nullable: true })
  dLLevel8: string | null;

  @Column({ type: 'character varying', name: 'DLLevel9', nullable: true })
  dLLevel9: string | null;

  @Column({ type: 'character varying', name: 'DLLevel10', nullable: true })
  dLLevel10: string | null;

  @Column({ type: 'character varying', name: 'DLLevel11', nullable: true })
  dLLevel11: string | null;

  @Column({ type: 'character varying', name: 'DLLevel12', nullable: true })
  dLLevel12: string | null;

  @Column({ type: 'character varying', name: 'DLLevel13', nullable: true })
  dLLevel13: string | null;

  @Column({ type: 'character varying', name: 'DLLevel14', nullable: true })
  dLLevel14: string | null;

  @Column({ type: 'character varying', name: 'DLLevel15', nullable: true })
  dLLevel15: string | null;

  @Column({ type: 'character varying', name: 'DLLevel16', nullable: true })
  dLLevel16: string | null;

  @Column({ type: 'character varying', name: 'DLLevel17', nullable: true })
  dLLevel17: string | null;

  @Column({ type: 'character varying', name: 'DLLevel18', nullable: true })
  dLLevel18: string | null;

  @Column({ type: 'character varying', name: 'DLLevel19', nullable: true })
  dLLevel19: string | null;

  @Column({ type: 'character varying', name: 'DLLevel20', nullable: true })
  dLLevel20: string | null;

  @Column({ type: 'bigint', name: 'DLTypeRef4', nullable: true })
  dLTypeRef4: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef5', nullable: true })
  dLTypeRef5: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef6', nullable: true })
  dLTypeRef6: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef7', nullable: true })
  dLTypeRef7: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef8', nullable: true })
  dLTypeRef8: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef9', nullable: true })
  dLTypeRef9: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef10', nullable: true })
  dLTypeRef10: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef11', nullable: true })
  dLTypeRef11: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef12', nullable: true })
  dLTypeRef12: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef13', nullable: true })
  dLTypeRef13: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef14', nullable: true })
  dLTypeRef14: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef15', nullable: true })
  dLTypeRef15: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef16', nullable: true })
  dLTypeRef16: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef17', nullable: true })
  dLTypeRef17: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef18', nullable: true })
  dLTypeRef18: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef19', nullable: true })
  dLTypeRef19: number | null;

  @Column({ type: 'bigint', name: 'DLTypeRef20', nullable: true })
  dLTypeRef20: number | null;

  @Column({ type: 'integer', name: 'TaxAccountType', nullable: true })
  taxAccountType: number | null;

  @Column({ type: 'integer', name: 'TaxStateType', nullable: true })
  taxStateType: number | null;

  @Column({ type: 'integer', name: 'TransactionType', nullable: true })
  transactionType: number | null;

  @Column({ type: 'integer', name: 'PurchaseOrSale', nullable: true })
  purchaseOrSale: number | null;

  @Column({ type: 'integer', name: 'ItemOrService', nullable: true })
  itemOrService: number | null;

  @Column({ type: 'bigint', name: 'PartyRef', nullable: true })
  partyRef: number | null;

  @Column({ type: 'numeric', name: 'TaxAmount', nullable: true })
  taxAmount: number | null;

  @Column({ type: 'numeric', name: 'TollAmount', nullable: true })
  tollAmount: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'PeriodNature', nullable: true })
  periodNature: number | null;

  @Column({ type: 'boolean', name: 'IsTaxPrepaymentUnrefundable', default: false })
  isTaxPrepaymentUnrefundable: boolean;

  @Column({ type: 'boolean', name: 'IsTollPrepaymentUnrefundable', default: false })
  isTollPrepaymentUnrefundable: boolean;

}