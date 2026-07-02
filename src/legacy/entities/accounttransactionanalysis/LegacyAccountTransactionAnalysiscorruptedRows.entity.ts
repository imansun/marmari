import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountTransactionAnalysis_corruptedRows' })
export class LegacyAccountTransactionAnalysiscorruptedRows {
  @PrimaryColumn({ type: 'bigint', name: 'AccountTransactionAnalysisID' })
  accountTransactionAnalysisID: number;

}