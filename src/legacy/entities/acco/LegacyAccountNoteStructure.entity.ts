import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountNoteStructure' })
export class LegacyAccountNoteStructure {
  @PrimaryColumn({ type: 'bigint', name: 'AccountNoteStructureID' })
  accountNoteStructureID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'integer', name: 'Nature' })
  nature: number;

  @Column({ type: 'integer', name: 'AccountType' })
  accountType: number;

  @Column({ type: 'integer', name: 'DLCalculationType', nullable: true })
  dLCalculationType: number | null;

  @Column({ type: 'integer', name: 'DLLevel', nullable: true })
  dLLevel: number | null;

  @Column({ type: 'numeric', name: 'ImportanceAmount' })
  importanceAmount: number;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}