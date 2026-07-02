import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportReceipt' })
export class LegacyOperationalReportReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportReceiptID' })
  operationalReportReceiptID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'ReceiptRecordingSourceRef' })
  receiptRecordingSourceRef: number;

  @Column({ type: 'integer', name: 'ReceiverType', nullable: true })
  receiverType: number | null;

  @Column({ type: 'bigint', name: 'ReceiverRef', nullable: true })
  receiverRef: number | null;

  @Column({ type: 'numeric', name: 'ReceiptQty', nullable: true })
  receiptQty: number | null;

  @Column({ type: 'numeric', name: 'FinalReceiptQty', nullable: true })
  finalReceiptQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}