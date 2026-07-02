import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FiscalYear' })
export class LegacyFiscalYear {
  @PrimaryColumn({ type: 'bigint', name: 'FiscalYearID' })
  fiscalYearID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}