import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContributionInTaxPayerBillCollectionLog' })
export class LegacyContributionInTaxPayerBillCollectionLog {
  @PrimaryColumn({ type: 'bigint', name: 'ContributionInTaxPayerBillCollectionLogID' })
  contributionInTaxPayerBillCollectionLogID: number;

  @Column({ type: 'bigint', name: 'EntityRef' })
  entityRef: number;

  @Column({ type: 'bigint', name: 'ReferenceEntityRef', nullable: true })
  referenceEntityRef: number | null;

  @Column({ type: 'integer', name: 'EntityType' })
  entityType: number;

  @Column({ type: 'integer', name: 'TargetState' })
  targetState: number;

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