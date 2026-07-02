import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'voucheritem14000129_DeletedRows' })
export class LegacyVoucheritem14000129DeletedRows {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @PrimaryColumn({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @PrimaryColumn({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupRef' })
  accountGroupRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'GLRef' })
  gLRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'SLRef' })
  sLRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'SLCode' })
  sLCode: string;

  @PrimaryColumn({ type: 'numeric', name: 'Debit' })
  debit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'Credit' })
  credit: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BaseCurrencyRef' })
  baseCurrencyRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'TargetCurrencyRef' })
  targetCurrencyRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TargetCurrencyDebit' })
  targetCurrencyDebit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TargetCurrencyCredit' })
  targetCurrencyCredit: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef' })
  operationalCurrencyExchangeRateRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'OperationalCurrencyExchangeRate' })
  operationalCurrencyExchangeRate: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'BaseCurrencyExchangeRateRef' })
  baseCurrencyExchangeRateRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'BaseCurrencyExchangeRate' })
  baseCurrencyExchangeRate: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'CurrencyDebit' })
  currencyDebit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'CurrencyCredit' })
  currencyCredit: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string;

  @PrimaryColumn({ type: 'character varying', name: 'Description_En' })
  descriptionEn: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'FollowUpNumber' })
  followUpNumber: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'FollowUpDate' })
  followUpDate: Date | null;

  @PrimaryColumn({ type: 'numeric', name: 'Quantity' })
  quantity: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel4' })
  dLLevel4: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel5' })
  dLLevel5: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel6' })
  dLLevel6: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel7' })
  dLLevel7: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel8' })
  dLLevel8: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel9' })
  dLLevel9: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel10' })
  dLLevel10: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel11' })
  dLLevel11: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel12' })
  dLLevel12: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel13' })
  dLLevel13: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel14' })
  dLLevel14: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel15' })
  dLLevel15: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel16' })
  dLLevel16: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel17' })
  dLLevel17: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel18' })
  dLLevel18: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel19' })
  dLLevel19: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'DLLevel20' })
  dLLevel20: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef4' })
  dLTypeRef4: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef5' })
  dLTypeRef5: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef6' })
  dLTypeRef6: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef7' })
  dLTypeRef7: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef8' })
  dLTypeRef8: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef9' })
  dLTypeRef9: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef10' })
  dLTypeRef10: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef11' })
  dLTypeRef11: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef12' })
  dLTypeRef12: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef13' })
  dLTypeRef13: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef14' })
  dLTypeRef14: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef15' })
  dLTypeRef15: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef16' })
  dLTypeRef16: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef17' })
  dLTypeRef17: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef18' })
  dLTypeRef18: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef19' })
  dLTypeRef19: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'DLTypeRef20' })
  dLTypeRef20: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TaxAccountType' })
  taxAccountType: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TaxStateType' })
  taxStateType: number | null;

  @PrimaryColumn({ type: 'integer', name: 'TransactionType' })
  transactionType: number | null;

  @PrimaryColumn({ type: 'integer', name: 'PurchaseOrSale' })
  purchaseOrSale: number | null;

  @PrimaryColumn({ type: 'integer', name: 'ItemOrService' })
  itemOrService: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartyRef' })
  partyRef: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TaxAmount' })
  taxAmount: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TollAmount' })
  tollAmount: number | null;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'integer', name: 'PeriodNature' })
  periodNature: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'IsTaxPrepaymentUnrefundable' })
  isTaxPrepaymentUnrefundable: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsTollPrepaymentUnrefundable' })
  isTollPrepaymentUnrefundable: boolean;

}