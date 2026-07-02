import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesNumberReservation' })
export class LegacySalesNumberReservation {
  @PrimaryColumn({ type: 'bigint', name: 'SalesNumberReservationID' })
  salesNumberReservationID: number;

  @Column({ type: 'integer', name: 'SourceType' })
  sourceType: number;

  @Column({ type: 'bigint', name: 'SourceRef' })
  sourceRef: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'character varying', name: 'TargetNumber' })
  targetNumber: string;

  @Column({ type: 'timestamp without time zone', name: 'Date', nullable: true })
  date: Date | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}