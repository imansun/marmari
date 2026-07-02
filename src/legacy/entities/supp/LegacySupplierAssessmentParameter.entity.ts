import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SupplierAssessmentParameter' })
export class LegacySupplierAssessmentParameter {
  @PrimaryColumn({ type: 'bigint', name: 'SupplierAssessmentParameterID' })
  supplierAssessmentParameterID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'EffectType' })
  effectType: number;

  @Column({ type: 'numeric', name: 'MinPoint' })
  minPoint: number;

  @Column({ type: 'numeric', name: 'MaxPoint' })
  maxPoint: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'State' })
  state: number;

}