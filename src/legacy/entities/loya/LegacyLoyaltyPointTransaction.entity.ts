import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyPointTransaction' })
export class LegacyLoyaltyPointTransaction {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyPointTransactionID' })
  loyaltyPointTransactionID: number;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef' })
  loyaltyProgramRef: number;

  @Column({ type: 'bigint', name: 'LoyaltyMemberRef' })
  loyaltyMemberRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRowRef', nullable: true })
  businessPolicyConditionRowRef: number | null;

  @Column({ type: 'bigint', name: 'PointTypeRef' })
  pointTypeRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'integer', name: 'TransactionType' })
  transactionType: number;

  @Column({ type: 'bigint', name: 'DataRef', nullable: true })
  dataRef: number | null;

  @Column({ type: 'bigint', name: 'DataRefType', nullable: true })
  dataRefType: number | null;

  @Column({ type: 'bigint', name: 'SourceRef', nullable: true })
  sourceRef: number | null;

  @Column({ type: 'bigint', name: 'SourceRefType', nullable: true })
  sourceRefType: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidFromDate', nullable: true })
  validFromDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'ValidToDate', nullable: true })
  validToDate: Date | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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

  @Column({ type: 'bigint', name: 'BaseLoyaltyPointTransactionRef', nullable: true })
  baseLoyaltyPointTransactionRef: number | null;

  @Column({ type: 'bigint', name: 'LoyaltyPointTransactionGroupRef', nullable: true })
  loyaltyPointTransactionGroupRef: number | null;

}