import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AssignmentDeliveryItem' })
export class LegacyAssignmentDeliveryItem {
  @PrimaryColumn({ type: 'bigint', name: 'AssignmentDeliveryItemID' })
  assignmentDeliveryItemID: number;

  @Column({ type: 'bigint', name: 'AssignmentRef' })
  assignmentRef: number;

  @Column({ type: 'bigint', name: 'OrderRef', nullable: true })
  orderRef: number | null;

  @Column({ type: 'bigint', name: 'InvoiceRef', nullable: true })
  invoiceRef: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef', nullable: true })
  weightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'Volume', nullable: true })
  volume: number | null;

  @Column({ type: 'bigint', name: 'VolumeUnitRef', nullable: true })
  volumeUnitRef: number | null;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'integer', name: 'DeliveryState', nullable: true })
  deliveryState: number | null;

  @Column({ type: 'integer', name: 'NotDeliveredType', nullable: true })
  notDeliveredType: number | null;

  @Column({ type: 'bigint', name: 'UnexecutedActivityReasonRef', nullable: true })
  unexecutedActivityReasonRef: number | null;

  @Column({ type: 'character varying', name: 'UnexecutedActivityDescription', nullable: true })
  unexecutedActivityDescription: string | null;

  @Column({ type: 'timestamp without time zone', name: 'HandheldCreationDate', nullable: true })
  handheldCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'integer', name: 'DeviceMobileDataState', nullable: true })
  deviceMobileDataState: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeviceChangeDate', nullable: true })
  deviceChangeDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'SaleRequestRef', nullable: true })
  saleRequestRef: number | null;

}