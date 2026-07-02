import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TourReturnInvoiceSettlement' })
export class LegacyTourReturnInvoiceSettlement {
  @PrimaryColumn({ type: 'bigint', name: 'TourReturnInvoiceSettlementID' })
  tourReturnInvoiceSettlementID: number;

  @Column({ type: 'bigint', name: 'TourRef' })
  tourRef: number;

  @Column({ type: 'bigint', name: 'ReturnInvoiceRef' })
  returnInvoiceRef: number;

  @Column({ type: 'bigint', name: 'ReferenceCode', nullable: true })
  referenceCode: number | null;

  @Column({ type: 'bigint', name: 'ReferenceRef', nullable: true })
  referenceRef: number | null;

  @Column({ type: 'numeric', name: 'SettlementAmount' })
  settlementAmount: number;

  @Column({ type: 'boolean', name: 'SentFromHandheld' })
  sentFromHandheld: boolean;

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

  @Column({ type: 'timestamp without time zone', name: 'HandheldUnexecutedReasonCreationDate', nullable: true })
  handheldUnexecutedReasonCreationDate: Date | null;

  @Column({ type: 'character varying', name: 'HandheldUnexecutedReasonLatitude', nullable: true })
  handheldUnexecutedReasonLatitude: string | null;

  @Column({ type: 'character varying', name: 'HandheldUnexecutedReasonLongitude', nullable: true })
  handheldUnexecutedReasonLongitude: string | null;

  @Column({ type: 'integer', name: 'HandheldUnexecutedReasonProvider', nullable: true })
  handheldUnexecutedReasonProvider: number | null;

  @Column({ type: 'numeric', name: 'HandheldUnexecutedReasonAccuracy', nullable: true })
  handheldUnexecutedReasonAccuracy: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}