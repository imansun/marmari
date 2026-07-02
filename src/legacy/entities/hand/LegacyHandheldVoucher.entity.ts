import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldVoucher' })
export class LegacyHandheldVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldVoucherID' })
  handheldVoucherID: number;

  @Column({ type: 'bigint', name: 'VoucherSpecificationRef' })
  voucherSpecificationRef: number;

  @Column({ type: 'bigint', name: 'StoreRef' })
  storeRef: number;

  @Column({ type: 'bigint', name: 'CounterpartStoreRef', nullable: true })
  counterpartStoreRef: number | null;

  @Column({ type: 'integer', name: 'Counterpart4EntityCode', nullable: true })
  counterpart4EntityCode: number | null;

  @Column({ type: 'character varying', name: 'Counterpart4Value', nullable: true })
  counterpart4Value: string | null;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef', nullable: true })
  inventoryVoucherRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'character varying', name: 'HandheldSpecificId', nullable: true })
  handheldSpecificId: string | null;

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

  @Column({ type: 'character varying', name: 'Level5DLCode', nullable: true })
  level5DLCode: string | null;

  @Column({ type: 'character varying', name: 'Level6DLCode', nullable: true })
  level6DLCode: string | null;

  @Column({ type: 'bigint', name: 'DelivererOrReceiverPartyRef', nullable: true })
  delivererOrReceiverPartyRef: number | null;

}