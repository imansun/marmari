import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CreditNote' })
export class LegacyCreditNote {
  @PrimaryColumn({ type: 'bigint', name: 'CreditNoteID' })
  creditNoteID: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidToDate', nullable: true })
  validToDate: Date | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'bigint', name: 'CreditNoteTemplateRef' })
  creditNoteTemplateRef: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'RetailShopRef' })
  retailShopRef: number;

  @Column({ type: 'bigint', name: 'RetailInteriorSectionRef', nullable: true })
  retailInteriorSectionRef: number | null;

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

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

}