import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'VoucherItemOffline' })
export class LegacyVoucherItemOffline {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @PrimaryColumn({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @PrimaryColumn({ type: 'bigint', name: 'VoucherRef' })
  voucherRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

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

  @PrimaryColumn({ type: 'numeric', name: 'CurrencyDebit' })
  currencyDebit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'CurrencyCredit' })
  currencyCredit: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'FollowUpNumber' })
  followUpNumber: string | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'FollowUpDate' })
  followUpDate: Date | null;

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

  @PrimaryColumn({ type: 'boolean', name: 'IsCurrencyBased' })
  isCurrencyBased: boolean;

  @PrimaryColumn({ type: 'numeric', name: 'Quantity' })
  quantity: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'PartyRef' })
  partyRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'bigint', name: 'VoucherTypeRef' })
  voucherTypeRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'AuxiliaryNumber' })
  auxiliaryNumber: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @PrimaryColumn({ type: 'integer', name: 'Number' })
  number: number | null;

  @PrimaryColumn({ type: 'integer', name: 'Sequence' })
  sequence: number;

  @PrimaryColumn({ type: 'boolean', name: 'IsTraceable' })
  isTraceable: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsQuantifiable' })
  isQuantifiable: boolean;

  @PrimaryColumn({ type: 'boolean', name: 'IsMultiCurrency' })
  isMultiCurrency: boolean;

  @PrimaryColumn({ type: 'integer', name: 'SLType' })
  sLType: number;

  @PrimaryColumn({ type: 'numeric', name: 'TargetCurrencyCredit' })
  targetCurrencyCredit: number | null;

  @PrimaryColumn({ type: 'numeric', name: 'TargetCurrencyDebit' })
  targetCurrencyDebit: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'TargetCurrencyRef' })
  targetCurrencyRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'VoucherCreator' })
  voucherCreator: number;

  @PrimaryColumn({ type: 'integer', name: 'DailyNumber' })
  dailyNumber: number;

  @PrimaryColumn({ type: 'integer', name: 'VoucherState' })
  voucherState: number;

  @PrimaryColumn({ type: 'integer', name: 'VoucherSequence' })
  voucherSequence: number;

  @PrimaryColumn({ type: 'boolean', name: 'IsExternal' })
  isExternal: boolean;

}