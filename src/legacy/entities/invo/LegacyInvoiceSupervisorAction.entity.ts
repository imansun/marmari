import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InvoiceSupervisorAction' })
export class LegacyInvoiceSupervisorAction {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceSupervisorActionID' })
  invoiceSupervisorActionID: number;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'bigint', name: 'SupervisorRef' })
  supervisorRef: number;

  @Column({ type: 'bigint', name: 'InvoiceRef' })
  invoiceRef: number;

  @Column({ type: 'bigint', name: 'InvoiceItemRef', nullable: true })
  invoiceItemRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActionDate' })
  actionDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}