import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityItem' })
export class LegacyBudgetEntityItem {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityItemID' })
  budgetEntityItemID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityRef' })
  budgetEntityRef: number;

  @Column({ type: 'bigint', name: 'RootID' })
  rootID: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'DLRef1', nullable: true })
  dLRef1: number | null;

  @Column({ type: 'bigint', name: 'DLRef2', nullable: true })
  dLRef2: number | null;

  @Column({ type: 'bigint', name: 'DLRef3', nullable: true })
  dLRef3: number | null;

  @Column({ type: 'bigint', name: 'DLRef4', nullable: true })
  dLRef4: number | null;

  @Column({ type: 'bigint', name: 'DLRef5', nullable: true })
  dLRef5: number | null;

  @Column({ type: 'bigint', name: 'DLRef6', nullable: true })
  dLRef6: number | null;

  @Column({ type: 'bigint', name: 'DLRef7', nullable: true })
  dLRef7: number | null;

  @Column({ type: 'bigint', name: 'DLRef8', nullable: true })
  dLRef8: number | null;

  @Column({ type: 'bigint', name: 'DLRef9', nullable: true })
  dLRef9: number | null;

  @Column({ type: 'bigint', name: 'DLRef10', nullable: true })
  dLRef10: number | null;

  @Column({ type: 'bigint', name: 'DLRef11', nullable: true })
  dLRef11: number | null;

  @Column({ type: 'bigint', name: 'DLRef12', nullable: true })
  dLRef12: number | null;

  @Column({ type: 'bigint', name: 'DLRef13', nullable: true })
  dLRef13: number | null;

  @Column({ type: 'bigint', name: 'DLRef14', nullable: true })
  dLRef14: number | null;

  @Column({ type: 'bigint', name: 'DLRef15', nullable: true })
  dLRef15: number | null;

  @Column({ type: 'bigint', name: 'DLRef16', nullable: true })
  dLRef16: number | null;

  @Column({ type: 'bigint', name: 'DLRef17', nullable: true })
  dLRef17: number | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'bigint', name: 'PaymentTypeSLRef', nullable: true })
  paymentTypeSLRef: number | null;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'PrimitiveAmount' })
  primitiveAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DLTypeArrangementRef' })
  dLTypeArrangementRef: number;

  @Column({ type: 'bigint', name: 'ReturnedBudgetEntityItemRef', nullable: true })
  returnedBudgetEntityItemRef: number | null;

  @Column({ type: 'bigint', name: 'AmendedBudgetEntityItemRef', nullable: true })
  amendedBudgetEntityItemRef: number | null;

  @Column({ type: 'bigint', name: 'DirectReferenceRef', nullable: true })
  directReferenceRef: number | null;

  @Column({ type: 'bigint', name: 'DirectReferenceRootID', nullable: true })
  directReferenceRootID: number | null;

  @Column({ type: 'boolean', name: 'IsAmended' })
  isAmended: boolean;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'AdjustedBudgetEntityItemRef', nullable: true })
  adjustedBudgetEntityItemRef: number | null;

  @Column({ type: 'integer', name: 'SourceType', nullable: true })
  sourceType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'AdjustedBudgetEntityItemRootID', nullable: true })
  adjustedBudgetEntityItemRootID: number | null;

}