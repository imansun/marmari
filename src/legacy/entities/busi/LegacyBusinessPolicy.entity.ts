import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicy' })
export class LegacyBusinessPolicy {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyID' })
  businessPolicyID: number;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'TargetBaseConcept' })
  targetBaseConcept: string;

  @Column({ type: 'character varying', name: 'TargetConcept' })
  targetConcept: string;

  @Column({ type: 'boolean', name: 'IsInternal', default: false })
  isInternal: boolean;

  @Column({ type: 'boolean', name: 'SupportsMultipleResults' })
  supportsMultipleResults: boolean;

  @Column({ type: 'integer', name: 'CalculationMethod', nullable: true })
  calculationMethod: number | null;

  @Column({ type: 'integer', name: 'Definitiveness' })
  definitiveness: number;

  @Column({ type: 'integer', name: 'Enforcement' })
  enforcement: number;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'boolean', name: 'IsApplicableOnWholeDocument' })
  isApplicableOnWholeDocument: boolean;

  @Column({ type: 'integer', name: 'Status' })
  status: number;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'EffectType', nullable: true, default: 1 })
  effectType: number | null;

  @Column({ type: 'boolean', name: 'MeasureTag', nullable: true, default: true })
  measureTag: boolean | null;

}