import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceFinalization' })
export class LegacyInvoiceFinalization {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceFinalizationID' })
  invoiceFinalizationID: number;

  @Column({ type: 'bigint', name: 'LastNumber' })
  lastNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'LastDate' })
  lastDate: Date;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'integer', name: 'OperationType' })
  operationType: number;

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

  @Column({ type: 'bigint', name: 'ReturnInvoiceLastNumber' })
  returnInvoiceLastNumber: number;

}