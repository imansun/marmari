import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceProductSpecificationConfig' })
export class LegacySelfServiceProductSpecificationConfig {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceProductSpecificationConfigID' })
  selfServiceProductSpecificationConfigID: number;

  @Column({ type: 'bigint', name: 'SpecificationRef', nullable: true })
  specificationRef: number | null;

  @Column({ type: 'bigint', name: 'FieldRef', nullable: true })
  fieldRef: number | null;

  @Column({ type: 'character varying', name: 'OriginalTitle' })
  originalTitle: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'CategoryCode' })
  categoryCode: number;

  @Column({ type: 'boolean', name: 'ShowInMainPage' })
  showInMainPage: boolean;

  @Column({ type: 'boolean', name: 'ShowInDetailsPage' })
  showInDetailsPage: boolean;

  @Column({ type: 'boolean', name: 'ShowInSummaryView' })
  showInSummaryView: boolean;

  @Column({ type: 'boolean', name: 'ShowInFilter' })
  showInFilter: boolean;

  @Column({ type: 'integer', name: 'TypeCode', nullable: true })
  typeCode: number | null;

  @Column({ type: 'bigint', name: 'GroupingRef', nullable: true })
  groupingRef: number | null;

  @Column({ type: 'integer', name: 'GroupingLevel', nullable: true })
  groupingLevel: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}