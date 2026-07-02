import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DepositDeploymentItem' })
export class LegacyDepositDeploymentItem {
  @PrimaryColumn({ type: 'bigint', name: 'DepositDeploymentItemID' })
  depositDeploymentItemID: number;

  @Column({ type: 'bigint', name: 'DepositDeploymentRef' })
  depositDeploymentRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'ReceiptNumber', nullable: true })
  receiptNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDate', nullable: true })
  receiptDate: Date | null;

  @Column({ type: 'character varying', name: 'ReceiptDepositNumber' })
  receiptDepositNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'ReceiptDepositDate' })
  receiptDepositDate: Date;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'SettlementNumber', nullable: true })
  settlementNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'SettlementDate', nullable: true })
  settlementDate: Date | null;

  @Column({ type: 'bigint', name: 'CounterPartRef', nullable: true })
  counterPartRef: number | null;

  @Column({ type: 'bigint', name: 'ContractRef', nullable: true })
  contractRef: number | null;

  @Column({ type: 'character varying', name: 'ContractNumber', nullable: true })
  contractNumber: string | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'DepositTypeRef' })
  depositTypeRef: number;

  @Column({ type: 'numeric', name: 'RemainingAmount' })
  remainingAmount: number;

  @Column({ type: 'numeric', name: 'TransferToTreasurySumAmount', nullable: true })
  transferToTreasurySumAmount: number | null;

  @Column({ type: 'character varying', name: 'CreditNumber', nullable: true })
  creditNumber: string | null;

  @Column({ type: 'timestamp without time zone', name: 'ConfirmDate', nullable: true })
  confirmDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}