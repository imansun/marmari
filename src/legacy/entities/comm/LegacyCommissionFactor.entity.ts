import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CommissionFactor' })
export class LegacyCommissionFactor {
  @PrimaryColumn({ type: 'bigint', name: 'CommissionFactorID' })
  commissionFactorID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'VariationTitle' })
  variationTitle: string;

  @Column({ type: 'bigint', name: 'ContextRef' })
  contextRef: number;

  @Column({ type: 'integer', name: 'FactorType' })
  factorType: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'integer', name: 'ValueAssignmentType' })
  valueAssignmentType: number;

  @Column({ type: 'integer', name: 'ImportanceLevel' })
  importanceLevel: number;

  @Column({ type: 'integer', name: 'MeasurmentUnit' })
  measurmentUnit: number;

  @Column({ type: 'boolean', name: 'IsEditable' })
  isEditable: boolean;

  @Column({ type: 'boolean', name: 'FinalResult' })
  finalResult: boolean;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}