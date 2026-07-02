import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TransportationManagementPortalDistribution' })
export class LegacyTransportationManagementPortalDistribution {
  @PrimaryColumn({ type: 'bigint', name: 'TransportationManagementPortalDistributionID' })
  transportationManagementPortalDistributionID: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'bigint', name: 'OrderItemRef' })
  orderItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'DeliveryAddressRef' })
  deliveryAddressRef: number;

  @Column({ type: 'bigint', name: 'TransportationVehicleTypeRef', nullable: true })
  transportationVehicleTypeRef: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ExpirationDate' })
  expirationDate: Date;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'character varying', name: 'RecipientName', nullable: true })
  recipientName: string | null;

  @Column({ type: 'character varying', name: 'Mobile', nullable: true })
  mobile: string | null;

  @Column({ type: 'character varying', name: 'Email', nullable: true })
  email: string | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Number', nullable: true })
  number: string | null;

  @Column({ type: 'boolean', name: 'IsAddedByUser' })
  isAddedByUser: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

}