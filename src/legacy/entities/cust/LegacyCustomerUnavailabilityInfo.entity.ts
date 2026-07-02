import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomerUnavailabilityInfo' })
export class LegacyCustomerUnavailabilityInfo {
  @PrimaryColumn({ type: 'bigint', name: 'CustomerUnavailabilityInfoId' })
  customerUnavailabilityInfoId: number;

  @Column({ type: 'bigint', name: 'CustomerRef' })
  customerRef: number;

  @Column({ type: 'integer', name: 'ActivityType' })
  activityType: number;

  @Column({ type: 'boolean', name: 'Saturday' })
  saturday: boolean;

  @Column({ type: 'boolean', name: 'Sunday' })
  sunday: boolean;

  @Column({ type: 'boolean', name: 'Monday' })
  monday: boolean;

  @Column({ type: 'boolean', name: 'Tuesday' })
  tuesday: boolean;

  @Column({ type: 'boolean', name: 'Wednesday' })
  wednesday: boolean;

  @Column({ type: 'boolean', name: 'Thursday' })
  thursday: boolean;

  @Column({ type: 'boolean', name: 'Friday' })
  friday: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}