import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConversionPattern' })
export class LegacyConversionPattern {
  @PrimaryColumn({ type: 'bigint', name: 'ConversionPatternID' })
  conversionPatternID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}