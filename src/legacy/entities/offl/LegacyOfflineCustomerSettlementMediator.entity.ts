import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OfflineCustomerSettlementMediator' })
export class LegacyOfflineCustomerSettlementMediator {
  @PrimaryColumn({ type: 'bigint', name: 'OfflineCustomerSettlementMediatorID' })
  offlineCustomerSettlementMediatorID: number;

  @Column({ type: 'bigint', name: 'CustomerSettlementRef' })
  customerSettlementRef: number;

  @Column({ type: 'bigint', name: 'SettlementPolicyRef' })
  settlementPolicyRef: number;

  @Column({ type: 'bigint', name: 'SettlementMethodGroupRef', nullable: true })
  settlementMethodGroupRef: number | null;

  @Column({ type: 'bigint', name: 'SettlementMethodRef' })
  settlementMethodRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'numeric', name: 'ConsumedPrePaymentAmount', nullable: true })
  consumedPrePaymentAmount: number | null;

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