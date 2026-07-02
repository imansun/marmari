import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReceiptPermitInformation' })
export class LegacyReceiptPermitInformation {
  @PrimaryColumn({ type: 'bigint', name: 'ReceiptPermitInformationID' })
  receiptPermitInformationID: number;

  @Column({ type: 'bigint', name: 'ReceiptPermitRef', nullable: true })
  receiptPermitRef: number | null;

  @Column({ type: 'bigint', name: 'CustomerRef', nullable: true })
  customerRef: number | null;

  @Column({ type: 'bigint', nullable: true })
  costcenterrefRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PurchaseDoerRequestRef', nullable: true })
  purchaseDoerRequestRef: number | null;

  @Column({ type: 'boolean', name: 'SalesRequestBrmbna', nullable: true })
  salesRequestBrmbna: boolean | null;

  @Column({ type: 'bigint', name: 'SalesRequestNoRef', nullable: true })
  salesRequestNoRef: number | null;

  @Column({ type: 'bigint', name: 'NoKharidRef', nullable: true })
  noKharidRef: number | null;

}