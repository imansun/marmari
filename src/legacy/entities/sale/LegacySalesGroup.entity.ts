import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesGroup' })
export class LegacySalesGroup {
  @PrimaryColumn({ type: 'bigint', name: 'SalesGroupID' })
  salesGroupID: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef', nullable: true })
  salesOfficeRef: number | null;

  @Column({ type: 'character varying', name: 'Caption' })
  caption: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'integer', name: 'Type', default: 1 })
  type: number;

  @Column({ type: 'integer', name: 'ActivityTypes' })
  activityTypes: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}