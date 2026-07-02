import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Invoice' })
export class LegacyInvoice {
  @PrimaryColumn({ type: 'bigint', name: 'InvoiceID' })
  invoiceID: number;

  @Column({ type: 'bigint', name: 'SalesInvoiceRef' })
  salesInvoiceRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bigint', name: 'TourRef', nullable: true })
  tourRef: number | null;

  @Column({ type: 'bigint', name: 'OrderRef', nullable: true })
  orderRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'HandheldCreationDate', nullable: true })
  handheldCreationDate: Date | null;

  @Column({ type: 'uuid', name: 'GUID', nullable: true })
  gUID: string | null;

  @Column({ type: 'character varying', name: 'Latitude', nullable: true })
  latitude: string | null;

  @Column({ type: 'character varying', name: 'Longitude', nullable: true })
  longitude: string | null;

  @Column({ type: 'integer', name: 'Provider', nullable: true })
  provider: number | null;

  @Column({ type: 'numeric', name: 'Accuracy', nullable: true })
  accuracy: number | null;

  @Column({ type: 'bigint', name: 'DistributerRef', nullable: true })
  distributerRef: number | null;

  @Column({ type: 'boolean', name: 'EffectiveOnDistributorAccount' })
  effectiveOnDistributorAccount: boolean;

  @Column({ type: 'bigint', name: 'DistributionShiftRef', nullable: true })
  distributionShiftRef: number | null;

  @Column({ type: 'boolean', name: 'DistributionShiftIsFixed', nullable: true })
  distributionShiftIsFixed: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DeviceMobileDataState', nullable: true })
  deviceMobileDataState: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeviceChangeDate', nullable: true })
  deviceChangeDate: Date | null;

  @Column({ type: 'bigint', name: 'SaleRequestRef', nullable: true })
  saleRequestRef: number | null;

}