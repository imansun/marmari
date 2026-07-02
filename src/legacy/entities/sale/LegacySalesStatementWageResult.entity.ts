import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesStatementWageResult' })
export class LegacySalesStatementWageResult {
  @PrimaryColumn({ type: 'bigint', name: 'SalesStatementWageResultID' })
  salesStatementWageResultID: number;

  @Column({ type: 'bigint', name: 'SalesStatementRef' })
  salesStatementRef: number;

  @Column({ type: 'bigint', name: 'BrokerServiceRef' })
  brokerServiceRef: number;

  @Column({ type: 'bigint', name: 'CutsAndCostsRef', nullable: true })
  cutsAndCostsRef: number | null;

  @Column({ type: 'integer', name: 'CalculationPrecedence', nullable: true })
  calculationPrecedence: number | null;

  @Column({ type: 'bigint', name: 'CurrencyRef' })
  currencyRef: number;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'boolean', name: 'ValueSetByUser' })
  valueSetByUser: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}