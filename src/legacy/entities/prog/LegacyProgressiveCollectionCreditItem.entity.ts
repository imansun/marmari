import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProgressiveCollectionCreditItem' })
export class LegacyProgressiveCollectionCreditItem {
  @PrimaryColumn({ type: 'bigint', name: 'ProgressiveCollectionCreditItemID' })
  progressiveCollectionCreditItemID: number;

  @Column({ type: 'bigint', name: 'ProgressiveCollectionRef' })
  progressiveCollectionRef: number;

  @Column({ type: 'character varying', name: 'ItemTypeDiscriminator' })
  itemTypeDiscriminator: string;

  @Column({ type: 'bigint', name: 'TransactionRef', nullable: true })
  transactionRef: number | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'bigint', name: 'EntityRef', nullable: true })
  entityRef: number | null;

  @Column({ type: 'numeric', name: 'AllocatedAmount' })
  allocatedAmount: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}