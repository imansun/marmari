import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PurchaseRequestItemVerification' })
export class LegacyPurchaseRequestItemVerification {
  @PrimaryColumn({ type: 'bigint', name: 'PurchaseRequestItemVerificationID' })
  purchaseRequestItemVerificationID: number;

  @Column({ type: 'bigint', name: 'PurchaseRequestItemRef' })
  purchaseRequestItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bigint', name: 'VerifierRef' })
  verifierRef: number;

  @Column({ type: 'bigint', name: 'SourceStepRef', nullable: true })
  sourceStepRef: number | null;

  @Column({ type: 'bigint', name: 'TargetStepRef', nullable: true })
  targetStepRef: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}