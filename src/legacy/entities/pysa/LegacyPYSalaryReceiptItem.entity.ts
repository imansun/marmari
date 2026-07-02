import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PYSalaryReceiptItem' })
export class LegacyPYSalaryReceiptItem {
  @PrimaryColumn({ type: 'bigint', name: 'PYSalaryReceiptItemID' })
  pYSalaryReceiptItemID: number;

  @Column({ type: 'bigint', name: 'PYSalaryReceiptRef' })
  pYSalaryReceiptRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'numeric', name: 'Remainder', nullable: true })
  remainder: number | null;

  @Column({ type: 'boolean', name: 'IsNet' })
  isNet: boolean;

  @Column({ type: 'boolean', name: 'IsRemainder' })
  isRemainder: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}