import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CalculationDescription' })
export class LegacyCalculationDescription {
  @PrimaryColumn({ type: 'bigint', name: 'CalculationDescriptionID' })
  calculationDescriptionID: number;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'integer', name: 'StatementType' })
  statementType: number;

  @Column({ type: 'character varying', name: 'NoteNumber', nullable: true })
  noteNumber: string | null;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'character varying', name: 'TempHeaderFixedText', nullable: true })
  tempHeaderFixedText: string | null;

  @Column({ type: 'character varying', name: 'TempFooterFixedText', nullable: true })
  tempFooterFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}