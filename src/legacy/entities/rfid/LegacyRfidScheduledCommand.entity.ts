import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RfidScheduledCommand' })
export class LegacyRfidScheduledCommand {
  @PrimaryColumn({ type: 'bigint', name: 'RfidScheduledCommandID' })
  rfidScheduledCommandID: number;

  @Column({ type: 'integer', name: 'CommandTypeCode' })
  commandTypeCode: number;

  @Column({ type: 'timestamp without time zone', name: 'CommandTime' })
  commandTime: Date;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'boolean', name: 'Enabled' })
  enabled: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'integer', name: 'RecurrenceTypeCode', default: 1 })
  recurrenceTypeCode: number;

  @Column({ type: 'integer', name: 'DailyRecurrence', default: 1 })
  dailyRecurrence: number;

  @Column({ type: 'boolean', name: 'Saturday', default: false })
  saturday: boolean;

  @Column({ type: 'boolean', name: 'Sunday', default: false })
  sunday: boolean;

  @Column({ type: 'boolean', name: 'Monday', default: false })
  monday: boolean;

  @Column({ type: 'boolean', name: 'Tuesday', default: false })
  tuesday: boolean;

  @Column({ type: 'boolean', name: 'Wednesday', default: false })
  wednesday: boolean;

  @Column({ type: 'boolean', name: 'Thursday', default: false })
  thursday: boolean;

  @Column({ type: 'boolean', name: 'Friday', default: false })
  friday: boolean;

  @Column({ type: 'integer', name: 'DayOfMonth', default: 1 })
  dayOfMonth: number;

  @Column({ type: 'integer', name: 'MonthlyRecurrence', default: 1 })
  monthlyRecurrence: number;

  @Column({ type: 'integer', name: 'ExecutionTimes', default: 0 })
  executionTimes: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

}