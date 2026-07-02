import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CostRepository' })
export class LegacyCostRepository {
  @PrimaryColumn({ type: 'bigint', name: 'CostRepositoryId' })
  costRepositoryId: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'integer', name: 'RowNumber', nullable: true })
  rowNumber: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'HeaderTitle' })
  headerTitle: string;

  @Column({ type: 'integer', name: 'SharingMethod', nullable: true })
  sharingMethod: number | null;

  @Column({ type: 'integer', name: 'GatheringType', nullable: true })
  gatheringType: number | null;

  @Column({ type: 'integer', name: 'EntityCode' })
  entityCode: number;

  @Column({ type: 'bigint', name: 'EntityHeaderRef' })
  entityHeaderRef: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'integer', name: 'EffectType' })
  effectType: number;

  @Column({ type: 'integer', name: 'CalculationMethod', nullable: true })
  calculationMethod: number | null;

  @Column({ type: 'bigint', name: 'CostRef', nullable: true })
  costRef: number | null;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity', nullable: true })
  majorUnitQuantity: number | null;

  @Column({ type: 'numeric', name: 'EffectiveMajorUnitQuantity', nullable: true })
  effectiveMajorUnitQuantity: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'numeric', name: 'Cost', nullable: true })
  cost: number | null;

  @Column({ type: 'bigint', name: 'DraftVoucherRef', nullable: true })
  draftVoucherRef: number | null;

  @Column({ type: 'integer', name: 'ApplyLevel' })
  applyLevel: number;

  @Column({ type: 'integer', name: 'ClientsFlag' })
  clientsFlag: number;

  @Column({ type: 'numeric', name: 'TotalFee', nullable: true })
  totalFee: number | null;

  @Column({ type: 'numeric', name: 'TotalMajorUnitQuantity', nullable: true })
  totalMajorUnitQuantity: number | null;

  @Column({ type: 'integer', name: 'ItemsNumber', nullable: true })
  itemsNumber: number | null;

  @Column({ type: 'numeric', name: 'TotalPrice', nullable: true })
  totalPrice: number | null;

  @Column({ type: 'numeric', name: 'ItemPrice', nullable: true })
  itemPrice: number | null;

  @Column({ type: 'numeric', name: 'ItemFee', nullable: true })
  itemFee: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'numeric', name: 'ItemWeight', nullable: true })
  itemWeight: number | null;

  @Column({ type: 'numeric', name: 'TotalWeight', nullable: true })
  totalWeight: number | null;

}