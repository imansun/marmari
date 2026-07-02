import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OrderConfirmation' })
export class LegacyOrderConfirmation {
  @PrimaryColumn({ type: 'bigint', name: 'OrderConfirmationID' })
  orderConfirmationID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'OrderRef' })
  orderRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'TraceID', nullable: true })
  traceID: string | null;

  @Column({ type: 'character varying', name: 'ScmNumber' })
  scmNumber: string;

  @Column({ type: 'boolean', name: 'AttachmentsReceived' })
  attachmentsReceived: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}