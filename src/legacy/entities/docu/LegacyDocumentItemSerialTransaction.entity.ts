import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DocumentItemSerialTransaction' })
export class LegacyDocumentItemSerialTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'DocumentItemSerialTransactionID' })
  documentItemSerialTransactionID: number;

  @Column({ type: 'bigint', name: 'SerialRef' })
  serialRef: number;

  @Column({ type: 'integer', name: 'DocumentType' })
  documentType: number;

  @Column({ type: 'bigint', name: 'DocumentItemRef' })
  documentItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'DocumentDate' })
  documentDate: Date;

  @Column({ type: 'boolean', name: 'IsManualDelivery' })
  isManualDelivery: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}