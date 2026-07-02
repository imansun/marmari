import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineMoneyTransfer' })
export class LegacyOnlineMoneyTransfer {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineMoneyTransferID' })
  onlineMoneyTransferID: number;

  @Column({ type: 'bigint', name: 'FiscalYearRef' })
  fiscalYearRef: number;

  @Column({ type: 'bigint', name: 'BranchRef' })
  branchRef: number;

  @Column({ type: 'character varying', name: 'ManagerKey' })
  managerKey: string;

  @Column({ type: 'character varying', name: 'ManagerTitle' })
  managerTitle: string;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'OnlineBankAccountRef' })
  onlineBankAccountRef: number;

  @Column({ type: 'bigint', name: 'SourceBankRef' })
  sourceBankRef: number;

  @Column({ type: 'bigint', name: 'SourceBankBranchRef' })
  sourceBankBranchRef: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayRef' })
  onlineGatewayRef: number;

  @Column({ type: 'bigint', name: 'OnlineGatewayUserAccountRef' })
  onlineGatewayUserAccountRef: number;

  @Column({ type: 'integer', name: 'TransferApiType' })
  transferApiType: number;

  @Column({ type: 'character varying', name: 'GatewayRegisterationCode', nullable: true })
  gatewayRegisterationCode: string | null;

  @Column({ type: 'integer', name: 'GatewayRegisteredDocumentState' })
  gatewayRegisteredDocumentState: number;

  @Column({ type: 'numeric', name: 'TotalAmount' })
  totalAmount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'TargetBankAccountEditorType' })
  targetBankAccountEditorType: number;

  @Column({ type: 'boolean', name: 'TargetBankAccountIsReadOnly' })
  targetBankAccountIsReadOnly: boolean;

  @Column({ type: 'numeric', name: 'ImportanceAmount', nullable: true })
  importanceAmount: number | null;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'boolean', name: 'ShowAmountOnItems', default: true })
  showAmountOnItems: boolean;

}