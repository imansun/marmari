import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SimpleNoteStructure' })
export class LegacySimpleNoteStructure {
  @PrimaryColumn({ type: 'bigint', name: 'SimpleNoteStructureID' })
  simpleNoteStructureID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'boolean', name: 'BasedOnMasterTopicStructure' })
  basedOnMasterTopicStructure: boolean;

  @Column({ type: 'boolean', name: 'ShowTotalValue' })
  showTotalValue: boolean;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}