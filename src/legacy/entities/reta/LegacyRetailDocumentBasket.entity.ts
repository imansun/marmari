import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailDocumentBasket' })
export class LegacyRetailDocumentBasket {
  @PrimaryColumn({ type: 'bigint', name: 'RetailDocumentBasketID' })
  retailDocumentBasketID: number;

  @Column({ type: 'character varying', name: 'BasketCode' })
  basketCode: string;

  @Column({ type: 'bigint', name: 'RetailDocumentRef' })
  retailDocumentRef: number;

  @Column({ type: 'integer', name: 'RetailDocumentType' })
  retailDocumentType: number;

  @Column({ type: 'boolean', name: 'IsDone' })
  isDone: boolean;

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