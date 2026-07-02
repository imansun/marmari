import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskTemplateCounterPart' })
export class LegacyTaskTemplateCounterPart {
  @PrimaryColumn({ type: 'bigint', name: 'TaskTemplateCounterPartID' })
  taskTemplateCounterPartID: number;

  @Column({ type: 'bigint', name: 'TaskTemplateRef' })
  taskTemplateRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'CounterPartType' })
  counterPartType: number;

  @Column({ type: 'boolean', name: 'IsRequired' })
  isRequired: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}