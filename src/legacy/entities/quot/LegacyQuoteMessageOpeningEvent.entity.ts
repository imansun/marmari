import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuoteMessageOpeningEvent' })
export class LegacyQuoteMessageOpeningEvent {
  @PrimaryColumn({ type: 'bigint', name: 'QuoteMessageOpeningEventID' })
  quoteMessageOpeningEventID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'InquiryRef' })
  inquiryRef: number;

  @Column({ type: 'bigint', name: 'ManagerUserRef' })
  managerUserRef: number;

  @Column({ type: 'timestamp without time zone', name: 'ExecutionDate', nullable: true })
  executionDate: Date | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

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

}