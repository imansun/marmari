import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DiscountCardTransaction' })
export class LegacyDiscountCardTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'DiscountCardTransactionID' })
  discountCardTransactionID: number;

  @Column({ type: 'bigint', name: 'DiscountCardRef' })
  discountCardRef: number;

  @Column({ type: 'integer', name: 'RetailDocumentType' })
  retailDocumentType: number;

  @Column({ type: 'bigint', name: 'RetailDocumentRef' })
  retailDocumentRef: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'Usage' })
  usage: number;

  @Column({ type: 'bigint', name: 'BaseDocumentRef', nullable: true })
  baseDocumentRef: number | null;

  @Column({ type: 'integer', name: 'BaseDocumentType', nullable: true })
  baseDocumentType: number | null;

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