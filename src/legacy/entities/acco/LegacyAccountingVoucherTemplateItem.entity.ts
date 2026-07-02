import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountingVoucherTemplateItem' })
export class LegacyAccountingVoucherTemplateItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountingVoucherTemplateItemID' })
  accountingVoucherTemplateItemID: number;

  @Column({ type: 'bigint', name: 'AccountingVoucherTemplateRef' })
  accountingVoucherTemplateRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'EntityInfoKey' })
  entityInfoKey: string;

  @Column({ type: 'character varying', name: 'RowFilter', nullable: true })
  rowFilter: string | null;

  @Column({ type: 'character varying', name: 'RowFilterDisplayText', nullable: true })
  rowFilterDisplayText: string | null;

  @Column({ type: 'bigint', name: 'AccountProxyRef', nullable: true })
  accountProxyRef: number | null;

  @Column({ type: 'character varying', name: 'SLFieldName', nullable: true })
  sLFieldName: string | null;

  @Column({ type: 'character varying', name: 'SLFieldTitle', nullable: true })
  sLFieldTitle: string | null;

  @Column({ type: 'character varying', name: 'DebitAmountName', nullable: true })
  debitAmountName: string | null;

  @Column({ type: 'character varying', name: 'DebitAmountTitle', nullable: true })
  debitAmountTitle: string | null;

  @Column({ type: 'character varying', name: 'CreditAmountName', nullable: true })
  creditAmountName: string | null;

  @Column({ type: 'character varying', name: 'CreditAmountTitle', nullable: true })
  creditAmountTitle: string | null;

  @Column({ type: 'character varying', name: 'DLFieldsPriority', nullable: true })
  dLFieldsPriority: string | null;

  @Column({ type: 'character varying', name: 'DLFieldsPriorityDisplayText', nullable: true })
  dLFieldsPriorityDisplayText: string | null;

  @Column({ type: 'character varying', name: 'DescriptionTemplate', nullable: true })
  descriptionTemplate: string | null;

  @Column({ type: 'character varying', name: 'DescriptionTemplateDisplayText', nullable: true })
  descriptionTemplateDisplayText: string | null;

  @Column({ type: 'character varying', name: 'QuantityFieldName', nullable: true })
  quantityFieldName: string | null;

  @Column({ type: 'character varying', name: 'QuantityFieldTitle', nullable: true })
  quantityFieldTitle: string | null;

  @Column({ type: 'character varying', name: 'FollowUpTemplate', nullable: true })
  followUpTemplate: string | null;

  @Column({ type: 'character varying', name: 'FollowUpTemplateDisplayText', nullable: true })
  followUpTemplateDisplayText: string | null;

  @Column({ type: 'character varying', name: 'FollowUpDateFieldName', nullable: true })
  followUpDateFieldName: string | null;

  @Column({ type: 'character varying', name: 'FollowUpDateFieldTitle', nullable: true })
  followUpDateFieldTitle: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsAmountEditable' })
  isAmountEditable: boolean;

  @Column({ type: 'integer', name: 'GroupNumber', nullable: true })
  groupNumber: number | null;

}