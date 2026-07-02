import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'BusinessPolicyConditionRow' })
export class LegacyBusinessPolicyConditionRow {
  @PrimaryColumn({ type: 'bigint', name: 'BusinessPolicyConditionRowID' })
  businessPolicyConditionRowID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyConditionRef' })
  businessPolicyConditionRef: number;

  @Column({ type: 'integer', name: 'Index', nullable: true })
  index: number | null;

  @Column({ type: 'character varying', name: 'Title', nullable: true })
  title: string | null;

  @Column({ type: 'timestamp without time zone', name: 'StartDate' })
  startDate: Date;

  @Column({ type: 'timestamp without time zone', name: 'EndDate', nullable: true })
  endDate: Date | null;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'text', name: 'ParameterValues' })
  parameterValues: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'EndDateModifiedManually', nullable: true })
  endDateModifiedManually: boolean | null;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationManualEndDate', nullable: true })
  lastModificationManualEndDate: Date | null;

  @Column({ type: 'boolean', name: 'ForceToUnload' })
  forceToUnload: boolean;

}