import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ComprehensiveIncomeStatementItem' })
export class LegacyComprehensiveIncomeStatementItem {
  @PrimaryColumn({ type: 'bigint', name: 'ComprehensiveIncomeStatementItemID' })
  comprehensiveIncomeStatementItemID: number;

  @Column({ type: 'bigint', name: 'ComprehensiveIncomeStatementRef' })
  comprehensiveIncomeStatementRef: number;

  @Column({ type: 'bigint', name: 'TopicRef', nullable: true })
  topicRef: number | null;

  @Column({ type: 'numeric', name: 'Amount', nullable: true })
  amount: number | null;

  @Column({ type: 'integer', name: 'TopicNature', nullable: true })
  topicNature: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'ColumnNo' })
  columnNo: number;

  @Column({ type: 'integer', name: 'RowNo' })
  rowNo: number;

  @Column({ type: 'integer', name: 'ColumnType', nullable: true })
  columnType: number | null;

  @Column({ type: 'integer', name: 'TotalType', nullable: true })
  totalType: number | null;

  @Column({ type: 'boolean', name: 'ShowTitle' })
  showTitle: boolean;

  @Column({ type: 'numeric', name: 'ComparativeAmount1', nullable: true })
  comparativeAmount1: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount2', nullable: true })
  comparativeAmount2: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount3', nullable: true })
  comparativeAmount3: number | null;

  @Column({ type: 'numeric', name: 'ComparativeAmount4', nullable: true })
  comparativeAmount4: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}