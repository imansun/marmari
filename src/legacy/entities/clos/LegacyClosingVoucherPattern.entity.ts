import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ClosingVoucherPattern' })
export class LegacyClosingVoucherPattern {
  @PrimaryColumn({ type: 'bigint', name: 'ClosingVoucherPatternID' })
  closingVoucherPatternID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Description_En', nullable: true })
  descriptionEn: string | null;

  @Column({ type: 'boolean', name: 'State' })
  state: boolean;

  @Column({ type: 'boolean', name: 'IssueVoucherSeparately' })
  issueVoucherSeparately: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}