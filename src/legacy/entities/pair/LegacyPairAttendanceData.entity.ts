import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PairAttendanceData' })
export class LegacyPairAttendanceData {
  @PrimaryColumn({ type: 'bigint', name: 'PairAttendanceDataID' })
  pairAttendanceDataID: number;

  @Column({ type: 'bigint', name: 'StartAttendanceDataRef', nullable: true })
  startAttendanceDataRef: number | null;

  @Column({ type: 'bigint', name: 'EndAttendanceDataRef', nullable: true })
  endAttendanceDataRef: number | null;

  @Column({ type: 'integer', name: 'RowNumber', nullable: true })
  rowNumber: number | null;

}