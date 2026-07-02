import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentScheduleItem' })
export class LegacyShipmentScheduleItem {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentScheduleItemID' })
  shipmentScheduleItemID: number;

  @Column({ type: 'bigint', name: 'ShipmentScheduleRef' })
  shipmentScheduleRef: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'timestamp without time zone', name: 'SurplusAndDeficitCalculationDate', nullable: true })
  surplusAndDeficitCalculationDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate' })
  endDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}