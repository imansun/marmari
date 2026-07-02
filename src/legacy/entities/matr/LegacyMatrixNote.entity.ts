import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MatrixNote' })
export class LegacyMatrixNote {
  @PrimaryColumn({ type: 'bigint', name: 'MatrixNoteID' })
  matrixNoteID: number;

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

  @Column({ type: 'integer', name: 'MatrixNoteType' })
  matrixNoteType: number;

  @Column({ type: 'bigint', name: 'CalculationInformationRef' })
  calculationInformationRef: number;

  @Column({ type: 'bigint', name: 'TempNoteStructureRef' })
  tempNoteStructureRef: number;

  @Column({ type: 'integer', name: 'ComparativeShowType' })
  comparativeShowType: number;

  @Column({ type: 'integer', name: 'AccountType', nullable: true })
  accountType: number | null;

  @Column({ type: 'integer', name: 'DLCalculationType', nullable: true })
  dLCalculationType: number | null;

  @Column({ type: 'integer', name: 'DLLevel', nullable: true })
  dLLevel: number | null;

  @Column({ type: 'integer', name: 'NoteDisplayLocation' })
  noteDisplayLocation: number;

  @Column({ type: 'character varying', name: 'HeaderFixedText', nullable: true })
  headerFixedText: string | null;

  @Column({ type: 'character varying', name: 'FooterFixedText', nullable: true })
  footerFixedText: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}