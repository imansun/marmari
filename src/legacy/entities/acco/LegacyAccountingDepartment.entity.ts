import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingDepartment' })
export class LegacyAccountingDepartment {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingDepartmentID' })
  accountingDepartmentID: number;

  @Column({ type: 'integer', name: 'Code', nullable: true })
  code: number | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'boolean', name: 'IsStatic', nullable: true })
  isStatic: boolean | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}