import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductCouponTransaction' })
export class LegacyProductCouponTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'ProductCouponTransactionID' })
  productCouponTransactionID: number;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'character varying', name: 'UniqueCode' })
  uniqueCode: string;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'numeric', name: 'CreditAmount' })
  creditAmount: number;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'bigint', name: 'ProductCouponProviderRef' })
  productCouponProviderRef: number;

  @Column({ type: 'character varying', name: 'TraceID' })
  traceID: string;

  @Column({ type: 'character varying', name: 'TerminalNumber' })
  terminalNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'RequestDateTime' })
  requestDateTime: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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