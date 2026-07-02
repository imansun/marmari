import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Branch' })
export class LegacyBranch {
  @PrimaryColumn({ type: 'bigint', name: 'BranchID' })
  branchID: number;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Title_En', nullable: true })
  titleEn: string | null;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'TaxPayerSystemBranchCode', nullable: true })
  taxPayerSystemBranchCode: string | null;

}