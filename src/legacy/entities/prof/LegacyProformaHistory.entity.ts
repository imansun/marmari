import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProformaHistory' })
export class LegacyProformaHistory {
  @PrimaryColumn({ type: 'bigint', name: 'ProformaHistoryID' })
  proformaHistoryID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'integer', name: 'VersionNumber' })
  versionNumber: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'Approver', nullable: true })
  approver: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ApproveDate', nullable: true })
  approveDate: Date | null;

  @Column({ type: 'numeric', name: 'PrePaidAmount' })
  prePaidAmount: number;

  @Column({ type: 'boolean', name: 'PaymentMonitoringNotification' })
  paymentMonitoringNotification: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}