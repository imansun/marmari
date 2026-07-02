import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'LoyaltyProgramPolicyEventActionMap' })
export class LegacyLoyaltyProgramPolicyEventActionMap {
  @PrimaryColumn({ type: 'bigint', name: 'LoyaltyProgramPolicyEventActionMapID' })
  loyaltyProgramPolicyEventActionMapID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'LoyaltyProgramRef' })
  loyaltyProgramRef: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'character varying', name: 'EventKey' })
  eventKey: string;

  @Column({ type: 'character varying', name: 'ActionKey' })
  actionKey: string;

  @Column({ type: 'boolean', name: 'CalculateForRecommender' })
  calculateForRecommender: boolean;

  @Column({ type: 'timestamp without time zone', name: 'ValidFromDate' })
  validFromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ValidToDate', nullable: true })
  validToDate: Date | null;

  @Column({ type: 'bigint', name: 'ScheduleRef', nullable: true })
  scheduleRef: number | null;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'LoyaltyPolicyOutputUsageStartBasis', nullable: true })
  loyaltyPolicyOutputUsageStartBasis: number | null;

  @Column({ type: 'bigint', name: 'LoyaltyPolicyOutputUsageStartOffsetDays', nullable: true })
  loyaltyPolicyOutputUsageStartOffsetDays: number | null;

  @Column({ type: 'bigint', name: 'LoyaltyPolicyOutputUsageDeadlineDays', nullable: true })
  loyaltyPolicyOutputUsageDeadlineDays: number | null;

  @Column({ type: 'integer', name: 'TargetConceptOnLoyaltyPolicy', nullable: true })
  targetConceptOnLoyaltyPolicy: number | null;

}