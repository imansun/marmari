import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ComprehensiveIncomeStatement' })
export class LegacyComprehensiveIncomeStatement {
  @PrimaryColumn({ type: 'bigint', name: 'ComprehensiveIncomeStatementID' })
  comprehensiveIncomeStatementID: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}