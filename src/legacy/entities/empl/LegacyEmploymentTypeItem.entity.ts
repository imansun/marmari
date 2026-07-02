import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EmploymentTypeItem' })
export class LegacyEmploymentTypeItem {
  @PrimaryColumn({ type: 'bigint', name: 'EmploymentTypeItemID' })
  employmentTypeItemID: number;

  @Column({ type: 'bigint', name: 'EmploymentTypeRef' })
  employmentTypeRef: number;

  @Column({ type: 'integer', name: 'EffectiveYearMonth' })
  effectiveYearMonth: number;

  @Column({ type: 'integer', name: 'CalendarMonthTypeCode' })
  calendarMonthTypeCode: number;

  @Column({ type: 'integer', name: 'WorkMinutes' })
  workMinutes: number;

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