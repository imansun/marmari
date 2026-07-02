import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'QuoteMessageOpeningEventAttender' })
export class LegacyQuoteMessageOpeningEventAttender {
  @PrimaryColumn({ type: 'bigint', name: 'QuoteMessageOpeningEventAttenderID' })
  quoteMessageOpeningEventAttenderID: number;

  @Column({ type: 'bigint', name: 'QuoteMessageOpeningEventRef' })
  quoteMessageOpeningEventRef: number;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'integer', name: 'ApprovalState' })
  approvalState: number;

  @Column({ type: 'timestamp without time zone', name: 'ApprovalDate', nullable: true })
  approvalDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}