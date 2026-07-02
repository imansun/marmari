import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldReportParameter' })
export class LegacyHandheldReportParameter {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldReportParameterID' })
  handheldReportParameterID: number;

  @Column({ type: 'bigint', name: 'HandheldReportRef' })
  handheldReportRef: number;

  @Column({ type: 'character varying', name: 'ParameterName' })
  parameterName: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'boolean', name: 'IsFixed' })
  isFixed: boolean;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'Reference', nullable: true })
  reference: string | null;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'boolean', name: 'Nullable' })
  nullable: boolean;

  @Column({ type: 'character varying', name: 'DefaultValue', nullable: true })
  defaultValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}