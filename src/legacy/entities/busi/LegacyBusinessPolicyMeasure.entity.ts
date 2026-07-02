import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyMeasure' })
export class LegacyBusinessPolicyMeasure {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyMeasureID' })
  businessPolicyMeasureID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'MeasureCategory' })
  measureCategory: string;

  @Column({ type: 'character varying', name: 'MeasureUID' })
  measureUID: string;

  @Column({ type: 'text', name: 'MeasureBinding' })
  measureBinding: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}