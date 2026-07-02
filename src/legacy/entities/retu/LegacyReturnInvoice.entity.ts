import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReturnInvoice' })
export class LegacyReturnInvoice {
  @PrimaryColumn({ type: 'bigint', name: 'ReturnInvoiceID' })
  returnInvoiceID: number;

  @Column({ type: 'bigint', name: 'SalesReturnInvoiceRef' })
  salesReturnInvoiceRef: number;

  @Column({ type: 'bigint', name: 'ReturnPermitRef', nullable: true })
  returnPermitRef: number | null;

  @Column({ type: 'bigint', name: 'TourRef', nullable: true })
  tourRef: number | null;

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

  @Column({ type: 'bigint', name: 'DistributerRef' })
  distributerRef: number;

  @Column({ type: 'boolean', name: 'EffectiveOnDistributorAccount' })
  effectiveOnDistributorAccount: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'DeviceMobileDataState', nullable: true })
  deviceMobileDataState: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeviceChangeDate', nullable: true })
  deviceChangeDate: Date | null;

  @Column({ type: 'boolean', name: 'WithoutMainBroker', default: false })
  withoutMainBroker: boolean;

}