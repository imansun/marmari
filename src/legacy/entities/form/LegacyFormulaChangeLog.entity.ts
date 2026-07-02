import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FormulaChangeLog' })
export class LegacyFormulaChangeLog {
  @PrimaryColumn({ type: 'bigint', name: 'FormulaChangeLogID' })
  formulaChangeLogID: number;

  @Column({ type: 'bigint', name: 'FactorRef' })
  factorRef: number;

  @Column({ type: 'character varying', name: 'FactorName' })
  factorName: string;

  @Column({ type: 'character varying', name: 'FactorTitle' })
  factorTitle: string;

  @Column({ type: 'bigint', name: 'FormulaRef' })
  formulaRef: number;

  @Column({ type: 'character varying', name: 'FormulaContext' })
  formulaContext: string;

  @Column({ type: 'character varying', name: 'OldFormulaBody' })
  oldFormulaBody: string;

  @Column({ type: 'character varying', name: 'NewFormulaBody' })
  newFormulaBody: string;

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