import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'WGSalaryReceiptItem' })
export class LegacyWGSalaryReceiptItem {
  @PrimaryColumn({ type: 'bigint', name: 'WGSalaryReceiptItemID' })
  wGSalaryReceiptItemID: number;

  @Column({ type: 'bigint', name: 'WGSalaryReceiptRef' })
  wGSalaryReceiptRef: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'numeric', name: 'Value' })
  value: number;

  @Column({ type: 'integer', name: 'IssueYearMonth' })
  issueYearMonth: number;

  @Column({ type: 'integer', name: 'ApplyYearMonth' })
  applyYearMonth: number;

  @Column({ type: 'boolean', name: 'IsNet' })
  isNet: boolean;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}