import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndicatorAnswerStructureItem' })
export class LegacyIndicatorAnswerStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'IndicatorAnswerStructureItemID' })
  indicatorAnswerStructureItemID: number;

  @Column({ type: 'bigint', name: 'IndicatorAnswerStructureRef' })
  indicatorAnswerStructureRef: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'numeric', name: 'MinValue', nullable: true })
  minValue: number | null;

  @Column({ type: 'numeric', name: 'MaxValue', nullable: true })
  maxValue: number | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}