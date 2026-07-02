import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'StrategicObjectiveItem' })
export class LegacyStrategicObjectiveItem {
  @PrimaryColumn({ type: 'bigint', name: 'StrategicObjectiveItemID' })
  strategicObjectiveItemID: number;

  @Column({ type: 'bigint', name: 'StrategicObjectiveRef' })
  strategicObjectiveRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'timestamp without time zone', name: 'StartDate', nullable: true })
  startDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'bigint', name: 'StrategicObjectiveTypeRef', nullable: true })
  strategicObjectiveTypeRef: number | null;

  @Column({ type: 'boolean', name: 'IsLeaf', nullable: true })
  isLeaf: boolean | null;

}