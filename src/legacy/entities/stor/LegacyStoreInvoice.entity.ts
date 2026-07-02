import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StoreInvoice' })
export class LegacyStoreInvoice {
  @PrimaryColumn({ type: 'bigint', name: 'StoreInvoiceID' })
  storeInvoiceID: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'character varying', name: 'InvoiceNo' })
  invoiceNo: string;

  @Column({ type: 'timestamp without time zone', name: 'InvoiceDate', nullable: true })
  invoiceDate: Date | null;

  @Column({ type: 'character varying', name: 'OutletCustomerName', nullable: true })
  outletCustomerName: string | null;

  @Column({ type: 'character varying', name: 'CustomerPhoneNo', nullable: true })
  customerPhoneNo: string | null;

  @Column({ type: 'numeric', name: 'CentAbatement', nullable: true })
  centAbatement: number | null;

  @Column({ type: 'numeric', name: 'AmountAbatement', nullable: true })
  amountAbatement: number | null;

  @Column({ type: 'numeric', name: 'InvoiceGrossSum', nullable: true })
  invoiceGrossSum: number | null;

  @Column({ type: 'numeric', name: 'ImpositionWithInvoiceAllSum', nullable: true })
  impositionWithInvoiceAllSum: number | null;

  @Column({ type: 'numeric', name: 'BankMouthAmount', nullable: true })
  bankMouthAmount: number | null;

  @Column({ type: 'numeric', name: 'IssueCashAmount', nullable: true })
  issueCashAmount: number | null;

  @Column({ type: 'numeric', name: 'IssueRoot', nullable: true })
  issueRoot: number | null;

  @Column({ type: 'bigint', name: 'CustomerNamRef', nullable: true })
  customerNamRef: number | null;

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

  @Column({ type: 'character varying', name: 'DuringIsDesigning', nullable: true })
  duringIsDesigning: string | null;

  @Column({ type: 'character varying', name: 'InvoiceComments', nullable: true })
  invoiceComments: string | null;

  @Column({ type: 'numeric', name: 'CashAbatementAmount', nullable: true })
  cashAbatementAmount: number | null;

  @Column({ type: 'numeric', name: 'AbatementSum', nullable: true })
  abatementSum: number | null;

}