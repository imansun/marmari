import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AccountGroupConfigurationItem' })
export class LegacyAccountGroupConfigurationItem {
  @PrimaryColumn({ type: 'bigint', name: 'AccountGroupConfigurationItemID' })
  accountGroupConfigurationItemID: number;

  @Column({ type: 'integer', name: 'AccountGroupCode' })
  accountGroupCode: number;

  @Column({ type: 'boolean', name: 'IsParametric' })
  isParametric: boolean;

  @Column({ type: 'character varying', name: 'DescriptionPattern', nullable: true })
  descriptionPattern: string | null;

  @Column({ type: 'bigint', name: 'SLRef', nullable: true })
  sLRef: number | null;

  @Column({ type: 'character varying', name: 'DL4ParameterKey', nullable: true })
  dL4ParameterKey: string | null;

  @Column({ type: 'bigint', name: 'DL4Ref', nullable: true })
  dL4Ref: number | null;

  @Column({ type: 'character varying', name: 'DL5ParameterKey', nullable: true })
  dL5ParameterKey: string | null;

  @Column({ type: 'bigint', name: 'DL5Ref', nullable: true })
  dL5Ref: number | null;

  @Column({ type: 'character varying', name: 'DL6ParameterKey', nullable: true })
  dL6ParameterKey: string | null;

  @Column({ type: 'bigint', name: 'DL6Ref', nullable: true })
  dL6Ref: number | null;

  @Column({ type: 'bigint', name: 'AccountGroupConfigurationRef' })
  accountGroupConfigurationRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}