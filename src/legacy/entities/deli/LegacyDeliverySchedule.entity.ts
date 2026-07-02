import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DeliverySchedule' })
export class LegacyDeliverySchedule {
  @PrimaryColumn({ type: 'bigint', name: 'DeliveryScheduleID' })
  deliveryScheduleID: number;

  @Column({ type: 'bigint', name: 'QuotationItemRef' })
  quotationItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}