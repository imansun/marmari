import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryVoucherItem' })
export class LegacyInventoryVoucherItem {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherItemID' })
  inventoryVoucherItemID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'character varying', name: 'ReferenceCode', nullable: true })
  referenceCode: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DelivererOrReceiverPartyRef', nullable: true })
  delivererOrReceiverPartyRef: number | null;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'ReturnableVoucherItemRef', nullable: true })
  returnableVoucherItemRef: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'integer', name: 'CounterpartEntityCode', nullable: true })
  counterpartEntityCode: number | null;

  @Column({ type: 'bigint', name: 'CounterpartEntityRef', nullable: true })
  counterpartEntityRef: number | null;

  @Column({ type: 'character varying', name: 'CounterpartEntityText', nullable: true })
  counterpartEntityText: string | null;

  @Column({ type: 'character varying', name: 'CounterpartDLCode', nullable: true })
  counterpartDLCode: string | null;

  @Column({ type: 'character varying', name: 'Level5DLCode', nullable: true })
  level5DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level6DLCode', nullable: true })
  level6DLCode: string | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'SecondUnitQuantity', nullable: true })
  secondUnitQuantity: number | null;

  @Column({ type: 'character varying', name: 'Additional1', nullable: true })
  additional1: string | null;

  @Column({ type: 'character varying', name: 'Additional2', nullable: true })
  additional2: string | null;

  @Column({ type: 'character varying', name: 'Additional3', nullable: true })
  additional3: string | null;

  @Column({ type: 'character varying', name: 'Additional4', nullable: true })
  additional4: string | null;

  @Column({ type: 'character varying', name: 'Additional5', nullable: true })
  additional5: string | null;

  @Column({ type: 'bigint', name: 'BarcodeTemplateRef', nullable: true })
  barcodeTemplateRef: number | null;

  @Column({ type: 'character varying', name: 'Barcode', nullable: true })
  barcode: string | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'VoucherCreationDate' })
  voucherCreationDate: Date;

  @Column({ type: 'boolean', name: 'HasQualityControl' })
  hasQualityControl: boolean;

  @Column({ type: 'integer', name: 'SLResolvingType', nullable: true })
  sLResolvingType: number | null;

  @Column({ type: 'bigint', name: 'DatesAsNumber' })
  datesAsNumber: number;

}