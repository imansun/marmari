import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionDocumentRulesEvaluation' })
export class LegacyInspectionDocumentRulesEvaluation {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionDocumentRulesEvaluationID' })
  inspectionDocumentRulesEvaluationID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'smallint', name: 'Range' })
  range: number;

  @Column({ type: 'smallint', name: 'Evaluation' })
  evaluation: number;

  @Column({ type: 'smallint', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InspectionDocumentRulesRef' })
  inspectionDocumentRulesRef: number;

}