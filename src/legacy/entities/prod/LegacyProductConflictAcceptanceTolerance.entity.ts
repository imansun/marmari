import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductConflictAcceptanceTolerance' })
export class LegacyProductConflictAcceptanceTolerance {
  @PrimaryColumn({ type: 'bigint', name: 'ProductConflictAcceptanceToleranceID' })
  productConflictAcceptanceToleranceID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'numeric', name: 'MaxNegativePercent', nullable: true })
  maxNegativePercent: number | null;

  @Column({ type: 'numeric', name: 'MaxNegativeValue', nullable: true })
  maxNegativeValue: number | null;

  @Column({ type: 'numeric', name: 'MaxPositivePercent', nullable: true })
  maxPositivePercent: number | null;

  @Column({ type: 'numeric', name: 'MaxPositiveValue', nullable: true })
  maxPositiveValue: number | null;

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