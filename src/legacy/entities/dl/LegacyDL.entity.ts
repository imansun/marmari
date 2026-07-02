import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DL' })
export class LegacyDL {
  @PrimaryColumn({ type: 'bigint', name: 'DLID' })
  dLID: number;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bigint', name: 'ReferenceID', nullable: true })
  referenceID: number | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'CurrencyRef', nullable: true })
  currencyRef: number | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'character varying', name: 'Discriminator', nullable: true })
  discriminator: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'boolean', name: 'State' })
  state: boolean;

  @Column({ type: 'character varying', name: 'ClassificationNumber', nullable: true })
  classificationNumber: string | null;

  @Column({ type: 'bigint', name: 'ParentDLRef', nullable: true })
  parentDLRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}