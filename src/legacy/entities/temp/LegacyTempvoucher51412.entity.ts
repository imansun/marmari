import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'tempvoucher51412' })
export class LegacyTempvoucher51412 {
  @PrimaryColumn({ type: 'bigint' })
  idgen: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherID' })
  inventoryVoucherID: number;

  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherSpecificationRef' })
  inventoryVoucherSpecificationRef: number;

  @PrimaryColumn({ type: 'integer', name: 'State' })
  state: number;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @PrimaryColumn({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'CounterpartStoreRef' })
  counterpartStoreRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @PrimaryColumn({ type: 'character varying', name: 'Number' })
  number: string;

  @PrimaryColumn({ type: 'bigint', name: 'DelivererOrReceiverPartyRef' })
  delivererOrReceiverPartyRef: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'bigint', name: 'SLRef' })
  sLRef: number | null;

  @PrimaryColumn({ type: 'integer', name: 'CounterpartEntityCode' })
  counterpartEntityCode: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'CounterpartEntityRef' })
  counterpartEntityRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'CounterpartEntityText' })
  counterpartEntityText: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'CounterpartDLCode' })
  counterpartDLCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Level5DLCode' })
  level5DLCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Level6DLCode' })
  level6DLCode: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @PrimaryColumn({ type: 'boolean', name: 'Editable' })
  editable: boolean;

  @PrimaryColumn({ type: 'integer', name: 'ReferenceType' })
  referenceType: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number | null;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'Additional1' })
  additional1: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Additional2' })
  additional2: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Additional3' })
  additional3: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Additional4' })
  additional4: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Additional5' })
  additional5: string | null;

}