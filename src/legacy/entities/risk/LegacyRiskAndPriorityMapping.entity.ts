import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RiskAndPriorityMapping' })
export class LegacyRiskAndPriorityMapping {
  @PrimaryColumn({ type: 'bigint', name: 'RiskAndPriorityMappingID' })
  riskAndPriorityMappingID: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'integer', name: 'Risk' })
  risk: number;

  @Column({ type: 'integer', name: 'Color' })
  color: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}