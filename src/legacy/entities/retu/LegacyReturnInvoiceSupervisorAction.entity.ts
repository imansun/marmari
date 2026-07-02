import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReturnInvoiceSupervisorAction' })
export class LegacyReturnInvoiceSupervisorAction {
  @PrimaryColumn({ type: 'bigint', name: 'ReturnInvoiceSupervisorActionID' })
  returnInvoiceSupervisorActionID: number;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'bigint', name: 'SupervisorRef' })
  supervisorRef: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceRef' })
  returnInvoiceRef: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceItemRef', nullable: true })
  returnInvoiceItemRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActionDate' })
  actionDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}