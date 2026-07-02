import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BalanceSheet' })
export class LegacyBalanceSheet {
  @PrimaryColumn({ type: 'bigint', name: 'BalanceSheetID' })
  balanceSheetID: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}