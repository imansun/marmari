import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetingDefault' })
export class LegacyBudgetingDefault {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetingDefaultID' })
  budgetingDefaultID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'BranchRef', nullable: true })
  branchRef: number | null;

  @Column({ type: 'bigint', name: 'UserRef', nullable: true })
  userRef: number | null;

  @Column({ type: 'bigint', name: 'LedgerRef', nullable: true })
  ledgerRef: number | null;

  @Column({ type: 'bigint', name: 'BudgetEntityClassificationRef' })
  budgetEntityClassificationRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityTypeRef', nullable: true })
  budgetEntityTypeRef: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}