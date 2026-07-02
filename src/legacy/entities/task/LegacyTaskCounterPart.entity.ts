import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'TaskCounterPart' })
export class LegacyTaskCounterPart {
  @PrimaryColumn({ type: 'bigint', name: 'TaskCounterPartID' })
  taskCounterPartID: number;

  @Column({ type: 'bigint', name: 'TaskRef' })
  taskRef: number;

  @Column({ type: 'bigint', name: 'TaskTemplateCounterPartRef' })
  taskTemplateCounterPartRef: number;

  @Column({ type: 'bigint', name: 'ValueRef', nullable: true })
  valueRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}