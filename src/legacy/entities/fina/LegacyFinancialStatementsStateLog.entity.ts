import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FinancialStatementsStateLog' })
export class LegacyFinancialStatementsStateLog {
  @PrimaryColumn({ type: 'bigint', name: 'FinancialStatementsStateLogID' })
  financialStatementsStateLogID: number;

  @Column({ type: 'bigint', name: 'ReportingPeriodRef' })
  reportingPeriodRef: number;

  @Column({ type: 'integer', name: 'OperationType' })
  operationType: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}