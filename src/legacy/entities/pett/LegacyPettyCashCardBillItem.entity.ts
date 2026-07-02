import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PettyCashCardBillItem' })
export class LegacyPettyCashCardBillItem {
  @PrimaryColumn({ type: 'bigint', name: 'PettyCashCardBillItemID' })
  pettyCashCardBillItemID: number;

  @Column({ type: 'bigint', name: 'PettyCashCardBillRef' })
  pettyCashCardBillRef: number;

  @Column({ type: 'numeric', name: 'Debit', nullable: true })
  debit: number | null;

  @Column({ type: 'numeric', name: 'Credit', nullable: true })
  credit: number | null;

  @Column({ type: 'character varying', name: 'DocumentNumber' })
  documentNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'character varying', name: 'Depositor', nullable: true })
  depositor: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'character', name: 'Identifier', nullable: true })
  identifier: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}