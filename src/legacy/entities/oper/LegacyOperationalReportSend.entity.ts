import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OperationalReportSend' })
export class LegacyOperationalReportSend {
  @PrimaryColumn({ type: 'bigint', name: 'OperationalReportSendID' })
  operationalReportSendID: number;

  @Column({ type: 'bigint', name: 'OperationalReportRef' })
  operationalReportRef: number;

  @Column({ type: 'bigint', name: 'SendRecordingSourceRef' })
  sendRecordingSourceRef: number;

  @Column({ type: 'integer', name: 'SenderType', nullable: true })
  senderType: number | null;

  @Column({ type: 'bigint', name: 'SenderRef', nullable: true })
  senderRef: number | null;

  @Column({ type: 'numeric', name: 'SendQty', nullable: true })
  sendQty: number | null;

  @Column({ type: 'numeric', name: 'FinalSendQty', nullable: true })
  finalSendQty: number | null;

  @Column({ type: 'bigint', name: 'MassPartUnitRef' })
  massPartUnitRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}