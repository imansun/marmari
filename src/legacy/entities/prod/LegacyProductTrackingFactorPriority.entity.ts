import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductTrackingFactorPriority' })
export class LegacyProductTrackingFactorPriority {
  @PrimaryColumn({ type: 'bigint', name: 'ProductTrackingFactorPriorityID' })
  productTrackingFactorPriorityID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'integer', name: 'PriorityType' })
  priorityType: number;

  @Column({ type: 'integer', name: 'PriorityOrder' })
  priorityOrder: number;

  @Column({ type: 'character varying', name: 'PriorityValues', nullable: true })
  priorityValues: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}