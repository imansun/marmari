import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SimpleNote' })
export class LegacySimpleNote {
  @PrimaryColumn({ type: 'bigint', name: 'SimpleNoteID' })
  simpleNoteID: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'boolean', name: 'BasedOnMasterTopicStructure' })
  basedOnMasterTopicStructure: boolean;

  @Column({ type: 'boolean', name: 'ShowTotalValue' })
  showTotalValue: boolean;

  @Column({ type: 'bigint', name: 'TempNoteStructureRef' })
  tempNoteStructureRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}