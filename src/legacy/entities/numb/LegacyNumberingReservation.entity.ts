import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingReservation' })
export class LegacyNumberingReservation {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingReservationID' })
  numberingReservationID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'bigint', name: 'Count', default: 1 })
  count: number;

  @Column({ type: 'integer', name: 'DateType', default: 2 })
  dateType: number;

  @Column({ type: 'timestamp without time zone', name: 'FromDate' })
  fromDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'ToDate', nullable: true })
  toDate: Date | null;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

  @Column({ type: 'integer', name: 'AssignType', default: 1 })
  assignType: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'State' })
  state: number;

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