import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BillOfLading' })
export class LegacyBillOfLading {
  @PrimaryColumn({ type: 'bigint', name: 'BillOfLadingID' })
  billOfLadingID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'CarrierRef' })
  carrierRef: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'DeliveryPlaceType' })
  deliveryPlaceType: number;

  @Column({ type: 'bigint', name: 'DeliveryPlaceRef' })
  deliveryPlaceRef: number;

  @Column({ type: 'integer', name: 'DestinationType', nullable: true })
  destinationType: number | null;

  @Column({ type: 'bigint', name: 'DestinationRef', nullable: true })
  destinationRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DeliveryFinishDate', nullable: true })
  deliveryFinishDate: Date | null;

  @Column({ type: 'character varying', name: 'Exporter' })
  exporter: string;

  @Column({ type: 'character varying', name: 'Consignee' })
  consignee: string;

  @Column({ type: 'character varying', name: 'NotifyParty' })
  notifyParty: string;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'numeric', name: 'NetPrice' })
  netPrice: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}