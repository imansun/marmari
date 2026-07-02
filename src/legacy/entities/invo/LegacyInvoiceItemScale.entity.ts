import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceItemScale' })
export class LegacyInvoiceItemScale {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceItemScaleID' })
  invoiceItemScaleID: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef' })
  invoiceItemRef: number;

  @Column({ type: 'bigint', name: 'CashRegisterDeviceRef' })
  cashRegisterDeviceRef: number;

  @Column({ type: 'character varying', name: 'DeviceReceiptCode' })
  deviceReceiptCode: string;

  @Column({ type: 'character varying', name: 'ScaleID', nullable: true })
  scaleID: string | null;

  @Column({ type: 'character varying', name: 'ReceiptNumber', nullable: true })
  receiptNumber: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}