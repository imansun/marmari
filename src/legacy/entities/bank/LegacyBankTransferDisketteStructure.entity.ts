import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BankTransferDisketteStructure' })
export class LegacyBankTransferDisketteStructure {
  @PrimaryColumn({ type: 'bigint', name: 'BankTransferDisketteStructureID' })
  bankTransferDisketteStructureID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'EncodingType' })
  encodingType: number;

  @Column({ type: 'character varying', name: 'FileNameFormat' })
  fileNameFormat: string;

  @Column({ type: 'character varying', name: 'FieldSeparator', nullable: true })
  fieldSeparator: string | null;

  @Column({ type: 'bigint', name: 'BankRef' })
  bankRef: number;

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