import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankTransferDisketteStructureItem' })
export class LegacyBankTransferDisketteStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'BankTransferDisketteItemID' })
  bankTransferDisketteItemID: number;

  @Column({ type: 'bigint', name: 'BankTransferDisketteStructureRef' })
  bankTransferDisketteStructureRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'FieldId', nullable: true })
  fieldId: number | null;

  @Column({ type: 'character varying', name: 'FieldText', nullable: true })
  fieldText: string | null;

  @Column({ type: 'integer', name: 'DateFormatId', nullable: true })
  dateFormatId: number | null;

  @Column({ type: 'integer', name: 'Length' })
  length: number;

  @Column({ type: 'integer', name: 'Order', nullable: true })
  order: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}