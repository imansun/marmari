import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RCCP' })
export class LegacyRCCP {
  @PrimaryColumn({ type: 'bigint', name: 'RCCPID' })
  rCCPID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bigint', name: 'ShiftGroupingRef', nullable: true })
  shiftGroupingRef: number | null;

  @Column({ type: 'bigint', name: 'ShiftRef', nullable: true })
  shiftRef: number | null;

  @Column({ type: 'bigint', name: 'FactoryCalendarRef', nullable: true })
  factoryCalendarRef: number | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'integer', name: 'ViewType' })
  viewType: number;

  @Column({ type: 'integer', name: 'ReferenceType', nullable: true })
  referenceType: number | null;

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