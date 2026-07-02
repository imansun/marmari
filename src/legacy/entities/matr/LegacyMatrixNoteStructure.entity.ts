import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNoteStructure' })
export class LegacyMatrixNoteStructure {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteStructureID' })
  matrixNoteStructureID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'bigint', name: 'TopicRef' })
  topicRef: number;

  @Column({ type: 'boolean', name: 'IsMajor' })
  isMajor: boolean;

  @Column({ type: 'boolean', name: 'ShowRowTotalInBooklet' })
  showRowTotalInBooklet: boolean;

  @Column({ type: 'boolean', name: 'ShowColumnTotalInBooklet' })
  showColumnTotalInBooklet: boolean;

  @Column({ type: 'bigint', name: 'LedgerRef' })
  ledgerRef: number;

  @Column({ type: 'integer', name: 'MatrixNoteType' })
  matrixNoteType: number;

  @Column({ type: 'integer', name: 'ComparativeShowType' })
  comparativeShowType: number;

  @Column({ type: 'integer', name: 'AccountType', nullable: true })
  accountType: number | null;

  @Column({ type: 'integer', name: 'DLCalculationType', nullable: true })
  dLCalculationType: number | null;

  @Column({ type: 'integer', name: 'DLLevel', nullable: true })
  dLLevel: number | null;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'NoteDisplayLocation' })
  noteDisplayLocation: number;

}