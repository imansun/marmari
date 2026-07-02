import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceFinVoucherInfo' })
export class LegacyInvoiceFinVoucherInfo {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceFinVoucherInfoID' })
  invoiceFinVoucherInfoID: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'integer', name: 'VoucherGenerationMethod' })
  voucherGenerationMethod: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}