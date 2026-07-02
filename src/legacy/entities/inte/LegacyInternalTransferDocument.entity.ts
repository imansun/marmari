import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InternalTransferDocument' })
export class LegacyInternalTransferDocument {
  @PrimaryColumn({ type: 'bigint', name: 'InternalTransferDocumentID' })
  internalTransferDocumentID: number;

  @Column({ type: 'timestamp without time zone', name: 'TransferDate' })
  transferDate: Date;

  @Column({ type: 'integer', name: 'TransferType' })
  transferType: number;

  @Column({ type: 'integer', name: 'RegisterType' })
  registerType: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

}