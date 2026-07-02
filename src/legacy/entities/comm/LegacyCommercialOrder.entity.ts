import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommercialOrder' })
export class LegacyCommercialOrder {
  @PrimaryColumn({ type: 'bigint', name: 'CommercialOrderID' })
  commercialOrderID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'character varying', name: 'RequestNumber', nullable: true })
  requestNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'RequestDate', nullable: true })
  requestDate: Date | null;

  @Column({ type: 'character varying', name: 'OrderNumber', nullable: true })
  orderNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'OrderDate' })
  orderDate: Date;

  @Column({ type: 'bigint', name: 'OperationalCurrencyExchangeRateRef', nullable: true })
  operationalCurrencyExchangeRateRef: number | null;

  @Column({ type: 'numeric', name: 'OperationalCurrencyExchangeRate', nullable: true })
  operationalCurrencyExchangeRate: number | null;

  @Column({ type: 'boolean', name: 'IsDirectCurrencyExchange', nullable: true })
  isDirectCurrencyExchange: boolean | null;

  @Column({ type: 'numeric', name: 'WageRate', nullable: true })
  wageRate: number | null;

  @Column({ type: 'integer', name: 'WageRateType' })
  wageRateType: number;

  @Column({ type: 'numeric', name: 'Wage', nullable: true })
  wage: number | null;

  @Column({ type: 'bigint', name: 'ShipmentSourceCountryRef', nullable: true })
  shipmentSourceCountryRef: number | null;

  @Column({ type: 'character varying', name: 'LoadingLocation', nullable: true })
  loadingLocation: string | null;

  @Column({ type: 'bigint', name: 'EntryBorderRef' })
  entryBorderRef: number;

  @Column({ type: 'bigint', name: 'TargetCustomOfficeRef' })
  targetCustomOfficeRef: number;

  @Column({ type: 'integer', name: 'PartialShipmentNumber', nullable: true })
  partialShipmentNumber: number | null;

  @Column({ type: 'numeric', name: 'DeliveryDeadline', nullable: true })
  deliveryDeadline: number | null;

  @Column({ type: 'bigint', name: 'CarrierRef', nullable: true })
  carrierRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'VoucherRef', nullable: true })
  voucherRef: number | null;

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

  @Column({ type: 'bigint', name: 'DraftVoucherRef', nullable: true })
  draftVoucherRef: number | null;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'PurchasingDepartmentRef' })
  purchasingDepartmentRef: number;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'boolean', name: 'InverseCalculation' })
  inverseCalculation: boolean;

}