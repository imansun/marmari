import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndicatorAnswerStructure' })
export class LegacyIndicatorAnswerStructure {
  @PrimaryColumn({ type: 'bigint', name: 'IndicatorAnswerStructureID' })
  indicatorAnswerStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsDefault' })
  isDefault: boolean;

  @Column({ type: 'integer', name: 'AnsweringMethod' })
  answeringMethod: number;

  @Column({ type: 'integer', name: 'ScoringMethod' })
  scoringMethod: number;

  @Column({ type: 'integer', name: 'CalculationMethod', nullable: true })
  calculationMethod: number | null;

  @Column({ type: 'integer', name: 'MaxChoice', nullable: true })
  maxChoice: number | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}