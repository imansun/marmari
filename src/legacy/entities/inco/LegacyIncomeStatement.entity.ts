import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IncomeStatement' })
export class LegacyIncomeStatement {
  @PrimaryColumn({ type: 'bigint', name: 'IncomeStatementID' })
  incomeStatementID: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}