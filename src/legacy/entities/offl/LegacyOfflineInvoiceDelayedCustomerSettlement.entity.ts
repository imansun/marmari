import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineInvoiceDelayedCustomerSettlement' })
export class LegacyOfflineInvoiceDelayedCustomerSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineInvoiceDelayedCustomerSettlementID' })
  offlineInvoiceDelayedCustomerSettlementID: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef' })
  customerSettlementRef: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementMediatorRef' })
  customerSettlementMediatorRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}