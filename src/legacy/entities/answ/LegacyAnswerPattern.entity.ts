import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AnswerPattern' })
export class LegacyAnswerPattern {
  @PrimaryColumn({ type: 'bigint', name: 'AnswerPatternID' })
  answerPatternID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'bigint', name: 'IndicatorRef' })
  indicatorRef: number;

  @Column({ type: 'bigint', name: 'IndicatorAnswerStructureRef', nullable: true })
  indicatorAnswerStructureRef: number | null;

  @Column({ type: 'integer', name: 'MinPoints', nullable: true })
  minPoints: number | null;

  @Column({ type: 'integer', name: 'MaxPoints', nullable: true })
  maxPoints: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}