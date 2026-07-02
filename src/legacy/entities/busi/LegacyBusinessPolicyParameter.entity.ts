import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyParameter' })
export class LegacyBusinessPolicyParameter {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyParameterID' })
  businessPolicyParameterID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'BaseConcept' })
  baseConcept: string;

  @Column({ type: 'character varying', name: 'Concept' })
  concept: string;

  @Column({ type: 'character varying', name: 'ConceptProperty' })
  conceptProperty: string;

  @Column({ type: 'bigint', name: 'EntityGroupingRef', nullable: true })
  entityGroupingRef: number | null;

  @Column({ type: 'integer', name: 'AssignmentMethod' })
  assignmentMethod: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsDefaultParameter' })
  isDefaultParameter: boolean;

  @Column({ type: 'character varying', name: 'DrillThroughProperty', nullable: true })
  drillThroughProperty: string | null;

  @Column({ type: 'bigint', name: 'DrillThroughFieldRef', nullable: true })
  drillThroughFieldRef: number | null;

  @Column({ type: 'integer', name: 'DrillThroughPrimitiveIndex', nullable: true })
  drillThroughPrimitiveIndex: number | null;

  @Column({ type: 'character varying', name: 'DrillThroughPropertyDisplay', nullable: true })
  drillThroughPropertyDisplay: string | null;

  @Column({ type: 'boolean', name: 'IsInternal' })
  isInternal: boolean;

  @Column({ type: 'boolean', name: 'IsComputational' })
  isComputational: boolean;

  @Column({ type: 'integer', name: 'ComputationType', nullable: true })
  computationType: number | null;

  @Column({ type: 'integer', name: 'GroupingLevel', nullable: true })
  groupingLevel: number | null;

  @Column({ type: 'character varying', name: 'DrillThroughProviderProperty', nullable: true })
  drillThroughProviderProperty: string | null;

  @Column({ type: 'character varying', name: 'ProviderFullName', nullable: true })
  providerFullName: string | null;

}