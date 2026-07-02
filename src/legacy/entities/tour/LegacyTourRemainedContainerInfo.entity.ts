import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourRemainedContainerInfo' })
export class LegacyTourRemainedContainerInfo {
  @PrimaryColumn({ type: 'bigint', name: 'TourRemainedContainerInfoID' })
  tourRemainedContainerInfoID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'HandheldDeliveryID' })
  handheldDeliveryID: number;

  @Column({ type: 'timestamp without time zone', name: 'HandheldDeliveryDate' })
  handheldDeliveryDate: Date;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'numeric', name: 'TotalQuantity' })
  totalQuantity: number;

  @Column({ type: 'numeric', name: 'DeliveredQuantity' })
  deliveredQuantity: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

}