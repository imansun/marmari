import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LetterExportReceipt' })
export class LegacyLetterExportReceipt {
  @PrimaryColumn({ type: 'bigint', name: 'LetterExportReceiptID' })
  letterExportReceiptID: number;

  @Column({ type: 'bigint', name: 'LetterRef' })
  letterRef: number;

  @Column({ type: 'bigint', name: 'ReceiverId' })
  receiverId: number;

  @Column({ type: 'character varying', name: 'ReceiptNumber' })
  receiptNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDate' })
  receiptDate: Date;

  @Column({ type: 'uuid', name: 'ReceiptFileGuid', nullable: true })
  receiptFileGuid: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}