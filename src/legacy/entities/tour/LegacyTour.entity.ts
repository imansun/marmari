import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Tour' })
export class LegacyTour {
  @PrimaryColumn({ type: 'bigint', name: 'TourID' })
  tourID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bigint', name: 'BrokerRef' })
  brokerRef: number;

  @Column({ type: 'bigint', name: 'MainBrokerRef', nullable: true })
  mainBrokerRef: number | null;

  @Column({ type: 'boolean', name: 'HasDistribution' })
  hasDistribution: boolean;

  @Column({ type: 'boolean', name: 'HasReturn' })
  hasReturn: boolean;

  @Column({ type: 'boolean', name: 'HasCollection' })
  hasCollection: boolean;

  @Column({ type: 'boolean', name: 'HasHotSales' })
  hasHotSales: boolean;

  @Column({ type: 'boolean', name: 'HasOrderTaking' })
  hasOrderTaking: boolean;

  @Column({ type: 'boolean', name: 'HasSurvey' })
  hasSurvey: boolean;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'boolean', name: 'IsOnline', default: false })
  isOnline: boolean;

  @Column({ type: 'boolean', name: 'SentToHandheld', default: false })
  sentToHandheld: boolean;

  @Column({ type: 'boolean', name: 'InvalidatedAfterSending', default: false })
  invalidatedAfterSending: boolean;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}