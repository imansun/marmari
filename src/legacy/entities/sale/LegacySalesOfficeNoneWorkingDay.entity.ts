import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficeNoneWorkingDay' })
export class LegacySalesOfficeNoneWorkingDay {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficeNoneWorkingDayID' })
  salesOfficeNoneWorkingDayID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'DayOfWeek', nullable: true })
  dayOfWeek: number | null;

  @Column({ type: 'integer', name: 'DayOfMonth', nullable: true })
  dayOfMonth: number | null;

  @Column({ type: 'timestamp without time zone', name: 'SpecificDate', nullable: true })
  specificDate: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}