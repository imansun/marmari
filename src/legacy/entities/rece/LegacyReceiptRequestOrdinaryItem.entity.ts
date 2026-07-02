import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceiptRequestOrdinaryItem' })
export class LegacyReceiptRequestOrdinaryItem {
  @PrimaryColumn({ type: 'bigint', name: 'ReceiptRequestOrdinaryItemID' })
  receiptRequestOrdinaryItemID: number;

  @Column({ type: 'bigint', name: 'ReceiptRequestRef' })
  receiptRequestRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'InitialAmount' })
  initialAmount: number;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDate' })
  receiptDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'DueDate', nullable: true })
  dueDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'CounterPartRef' })
  counterPartRef: number;

  @Column({ type: 'character varying', name: 'StandardDescriptionPattern', nullable: true })
  standardDescriptionPattern: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}