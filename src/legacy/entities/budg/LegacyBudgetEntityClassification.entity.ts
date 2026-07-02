import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BudgetEntityClassification' })
export class LegacyBudgetEntityClassification {
  @PrimaryColumn({ type: 'bigint', name: 'BudgetEntityClassificationID' })
  budgetEntityClassificationID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityCategoryRef' })
  budgetEntityCategoryRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'smallint', name: 'DisplayOrder' })
  displayOrder: number;

  @Column({ type: 'character varying', name: 'IconKey', nullable: true })
  iconKey: string | null;

  @Column({ type: 'boolean', name: 'IsPreDefined' })
  isPreDefined: boolean;

  @Column({ type: 'boolean', name: 'IsBaseOfReceipt' })
  isBaseOfReceipt: boolean;

  @Column({ type: 'boolean', name: 'IsBaseOfPayment' })
  isBaseOfPayment: boolean;

  @Column({ type: 'boolean', name: 'IsBaseOfPaymentVerification' })
  isBaseOfPaymentVerification: boolean;

  @Column({ type: 'boolean', name: 'IsPaymentVerification' })
  isPaymentVerification: boolean;

  @Column({ type: 'boolean', name: 'Returnable' })
  returnable: boolean;

  @Column({ type: 'boolean', name: 'HasAmendment' })
  hasAmendment: boolean;

  @Column({ type: 'boolean', name: 'HasWithoutBaseAmendment' })
  hasWithoutBaseAmendment: boolean;

  @Column({ type: 'boolean', name: 'HasCommitment' })
  hasCommitment: boolean;

  @Column({ type: 'boolean', name: 'HasBranch' })
  hasBranch: boolean;

  @Column({ type: 'boolean', name: 'IsAdjusting' })
  isAdjusting: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'BasisClassificationRef', nullable: true })
  basisClassificationRef: number | null;

  @Column({ type: 'bigint', name: 'DirectReferenceRef', nullable: true })
  directReferenceRef: number | null;

  @Column({ type: 'boolean', name: 'BasisClassificationIsOptional' })
  basisClassificationIsOptional: boolean;

  @Column({ type: 'boolean', name: 'BasisClassificationBeControled' })
  basisClassificationBeControled: boolean;

  @Column({ type: 'boolean', name: 'AutoReturnDirectReference' })
  autoReturnDirectReference: boolean;

  @Column({ type: 'boolean', name: 'HasUniqueDirectReference' })
  hasUniqueDirectReference: boolean;

  @Column({ type: 'boolean', name: 'HasMultiSelectFromOtherModules' })
  hasMultiSelectFromOtherModules: boolean;

  @Column({ type: 'boolean', name: 'PayOrReceiveAfterVocuherRegisterd', default: false })
  payOrReceiveAfterVocuherRegisterd: boolean;

  @Column({ type: 'boolean', name: 'ControlPaymentRemainingAmount' })
  controlPaymentRemainingAmount: boolean;

}