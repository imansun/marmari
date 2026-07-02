import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReportStructure' })
export class LegacyReportStructure {
  @PrimaryColumn({ type: 'bigint', name: 'ReportStructureID' })
  reportStructureID: number;

  @Column({ type: 'bigint', name: 'StructureRef' })
  structureRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}