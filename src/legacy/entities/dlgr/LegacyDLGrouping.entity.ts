import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLGrouping' })
export class LegacyDLGrouping {
  @PrimaryColumn({ type: 'bigint', name: 'DLGroupingID' })
  dLGroupingID: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsAssigned' })
  isAssigned: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}