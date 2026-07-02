import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SchedulePricing' })
export class LegacySchedulePricing {
  @PrimaryColumn({ type: 'bigint', name: 'SchedulePricingID' })
  schedulePricingID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'boolean', name: 'IsReturn' })
  isReturn: boolean;

  @Column({ type: 'bigint', name: 'UserRef' })
  userRef: number;

  @Column({ type: 'bigint', name: 'JobRef', nullable: true })
  jobRef: number | null;

  @Column({ type: 'character varying', name: 'ScheduleFailureReason', nullable: true })
  scheduleFailureReason: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}