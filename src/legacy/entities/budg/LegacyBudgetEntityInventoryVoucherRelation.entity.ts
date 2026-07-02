import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityInventoryVoucherRelation' })
export class LegacyBudgetEntityInventoryVoucherRelation {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityInventoryVoucherRelationID' })
  budgetEntityInventoryVoucherRelationID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'integer', name: 'BudgetEntityCode' })
  budgetEntityCode: number;

  @Column({ type: 'bigint', name: 'BudgetItemRef' })
  budgetItemRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}