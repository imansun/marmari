import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetingDefaultItem' })
export class LegacyBudgetingDefaultItem {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetingDefaultItemID' })
  budgetingDefaultItemID: number;

  @Column({ type: 'bigint', name: 'BudgetingDefaultRef' })
  budgetingDefaultRef: number;

  @Column({ type: 'character varying', name: 'BudgetingDefaultMember' })
  budgetingDefaultMember: string;

  @Column({ type: 'character varying', name: 'BudgetingDefaultMemberName' })
  budgetingDefaultMemberName: string;

  @Column({ type: 'integer', name: 'BudgetingDefaultMemberControlType' })
  budgetingDefaultMemberControlType: number;

  @Column({ type: 'boolean', name: 'OnlyForPaymentVerification' })
  onlyForPaymentVerification: boolean;

  @Column({ type: 'boolean', name: 'IsNullable' })
  isNullable: boolean;

  @Column({ type: 'character varying', name: 'BudgetingDefaultValue', nullable: true })
  budgetingDefaultValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}