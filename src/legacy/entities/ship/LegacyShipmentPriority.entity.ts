import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ShipmentPriority' })
export class LegacyShipmentPriority {
  @PrimaryColumn({ type: 'bigint', name: 'ShipmentPriorityID' })
  shipmentPriorityID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}