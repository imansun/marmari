import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomsDeclarationRelatedInvoices' })
export class LegacyCustomsDeclarationRelatedInvoices {
  @PrimaryColumn({ type: 'bigint', name: 'CustomsDeclarationRelatedInvoicesID' })
  customsDeclarationRelatedInvoicesID: number;

  @Column({ type: 'bigint', name: 'CustomsDeclarationRef' })
  customsDeclarationRef: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}