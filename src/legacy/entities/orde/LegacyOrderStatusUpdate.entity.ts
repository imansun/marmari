import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderStatusUpdate' })
export class LegacyOrderStatusUpdate {
  @PrimaryColumn({ type: 'bigint', name: 'OrderStatusUpdateID' })
  orderStatusUpdateID: number;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'character varying', name: 'Status' })
  status: string;

  @Column({ type: 'character varying', name: 'Comment', nullable: true })
  comment: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}