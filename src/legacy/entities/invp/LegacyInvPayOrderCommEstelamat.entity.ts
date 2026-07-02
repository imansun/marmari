import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvPayOrderCommEstelamat' })
export class LegacyInvPayOrderCommEstelamat {
  @PrimaryColumn({ type: 'bigint', name: 'InvPayOrderCommEstelamatID' })
  invPayOrderCommEstelamatID: number;

  @Column({ type: 'bigint', name: '_MasterRef' })
  masterRef: number;

  @Column({ type: 'bigint', name: 'Cue' })
  cue: number;

  @Column({ type: 'character varying', name: 'CompanyPersonNamee', nullable: true })
  companyPersonNamee: string | null;

  @Column({ type: 'character varying', name: 'InvoicePreNum', nullable: true })
  invoicePreNum: string | null;

  @Column({ type: 'timestamp without time zone', name: 'InvoicePreDatee', nullable: true })
  invoicePreDatee: Date | null;

  @Column({ type: 'numeric', name: 'InvoicePreAmount', nullable: true })
  invoicePreAmount: number | null;

  @Column({ type: 'boolean', name: 'PurchaseAimIsBid', nullable: true })
  purchaseAimIsBid: boolean | null;

  @Column({ type: 'character varying', name: 'Comments', nullable: true })
  comments: string | null;

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