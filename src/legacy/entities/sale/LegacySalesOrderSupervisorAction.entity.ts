import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOrderSupervisorAction' })
export class LegacySalesOrderSupervisorAction {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOrderSupervisorActionID' })
  salesOrderSupervisorActionID: number;

  @Column({ type: 'integer', name: 'Action' })
  action: number;

  @Column({ type: 'bigint', name: 'SupervisorRef' })
  supervisorRef: number;

  @Column({ type: 'bigint', name: 'SalesOrderRef' })
  salesOrderRef: number;

  @Column({ type: 'bigint', name: 'SalesOrderItemRef', nullable: true })
  salesOrderItemRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ActionDate' })
  actionDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}