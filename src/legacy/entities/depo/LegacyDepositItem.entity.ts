import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DepositItem' })
export class LegacyDepositItem {
  @PrimaryColumn({ type: 'bigint', name: 'DepositItemID' })
  depositItemID: number;

  @Column({ type: 'bigint', name: 'DepositRef' })
  depositRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'integer', name: 'ReferenceType' })
  referenceType: number;

  @Column({ type: 'bigint', name: 'ReferenceRef' })
  referenceRef: number;

  @Column({ type: 'character varying', name: 'ReferenceNumber' })
  referenceNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'ReferenceDate', nullable: true })
  referenceDate: Date | null;

  @Column({ type: 'numeric', name: 'ReferenceAmount' })
  referenceAmount: number;

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

  @Column({ type: 'bigint', name: 'DepositTypeRef', nullable: true })
  depositTypeRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}