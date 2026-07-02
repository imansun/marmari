import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TestProfileInspectionLot' })
export class LegacyTestProfileInspectionLot {
  @PrimaryColumn({ type: 'bigint', name: 'TestProfileInspectionLotID' })
  testProfileInspectionLotID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'TestProfileRef' })
  testProfileRef: number;

  @Column({ type: 'bigint', name: 'InspectionLotRef', nullable: true })
  inspectionLotRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'ScheduleDate', nullable: true })
  scheduleDate: Date | null;

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