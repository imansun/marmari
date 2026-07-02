import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InventoryScheduledJob' })
export class LegacyInventoryScheduledJob {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryScheduledJobID' })
  inventoryScheduledJobID: number;

  @Column({ type: 'bigint', name: 'InventoryScheduledTaskRef' })
  inventoryScheduledTaskRef: number;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}