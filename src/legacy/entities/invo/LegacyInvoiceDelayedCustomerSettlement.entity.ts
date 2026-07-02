import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceDelayedCustomerSettlement' })
export class LegacyInvoiceDelayedCustomerSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceDelayedCustomerSettlementID' })
  invoiceDelayedCustomerSettlementID: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef' })
  customerSettlementRef: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementMediatorRef' })
  customerSettlementMediatorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'OfflineID', nullable: true })
  offlineID: number | null;

}