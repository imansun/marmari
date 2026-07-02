import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliveryScheduleItem' })
export class LegacyDeliveryScheduleItem {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryScheduleItemID' })
  deliveryScheduleItemID: number;

  @Column({ type: 'bigint', name: 'DeliveryScheduleRef' })
  deliveryScheduleRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryDate' })
  deliveryDate: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}