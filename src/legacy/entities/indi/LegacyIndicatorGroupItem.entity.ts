import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndicatorGroupItem' })
export class LegacyIndicatorGroupItem {
  @PrimaryColumn({ type: 'bigint', name: 'IndicatorGroupItemID' })
  indicatorGroupItemID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bigint', name: 'IndicatorGroupRef' })
  indicatorGroupRef: number;

  @Column({ type: 'integer', name: 'NodeType' })
  nodeType: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'bigint', name: 'IndicatorRef', nullable: true })
  indicatorRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}