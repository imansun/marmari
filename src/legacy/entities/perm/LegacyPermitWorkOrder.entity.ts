import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermitWorkOrder' })
export class LegacyPermitWorkOrder {
  @PrimaryColumn({ type: 'bigint', name: 'PermitWorkOrderID' })
  permitWorkOrderID: number;

  @Column({ type: 'bigint', name: 'PermitRef' })
  permitRef: number;

  @Column({ type: 'bigint', name: 'WorkOrderRef' })
  workOrderRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}