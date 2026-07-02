import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OnlineMoneyTransferItem' })
export class LegacyOnlineMoneyTransferItem {
  @PrimaryColumn({ type: 'bigint', name: 'OnlineMoneyTransferItemID' })
  onlineMoneyTransferItemID: number;

  @Column({ type: 'bigint', name: 'OnlineMoneyTransferRef' })
  onlineMoneyTransferRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'character varying', name: 'ReferenceNumber', nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'character varying', name: 'ReferenceDetailNumber', nullable: true })
  referenceDetailNumber: string | null;

  @Column({ type: 'bigint', name: 'CounterpartPartyRef' })
  counterpartPartyRef: number;

  @Column({ type: 'bigint', name: 'OnlineBankAccountRef' })
  onlineBankAccountRef: number;

  @Column({ type: 'bigint', name: 'TargetBankRef' })
  targetBankRef: number;

  @Column({ type: 'character varying', name: 'AccountNumber' })
  accountNumber: string;

  @Column({ type: 'character varying', name: 'InternationalAccountNumber' })
  internationalAccountNumber: string;

  @Column({ type: 'character varying', name: 'OnlineBankAccountOwners' })
  onlineBankAccountOwners: string;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'GatewayRegisterationCode', nullable: true })
  gatewayRegisterationCode: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version', nullable: true })
  version: Buffer | null;

  @Column({ type: 'boolean', name: 'TargetBankAccountIsReadOnly', default: false })
  targetBankAccountIsReadOnly: boolean;

}