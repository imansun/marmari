import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BatchProfileTemplatePart' })
export class LegacyBatchProfileTemplatePart {
  @PrimaryColumn({ type: 'bigint', name: 'BatchProfileTemplatePartID' })
  batchProfileTemplatePartID: number;

  @Column({ type: 'bigint', name: 'BatchProfileTemplateRef' })
  batchProfileTemplateRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'integer', name: 'ProductionBatchType', nullable: true })
  productionBatchType: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}