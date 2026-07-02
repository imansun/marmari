import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesCommissionContext' })
export class LegacySalesCommissionContext {
  @PrimaryColumn({ type: 'bigint', name: 'SalesCommissionContextID' })
  salesCommissionContextID: number;

  @Column({ type: 'character varying', name: 'Key' })
  key: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'FactorType' })
  factorType: number;

  @Column({ type: 'integer', name: 'TargetType' })
  targetType: number;

  @Column({ type: 'character varying', name: 'VariablePrefix' })
  variablePrefix: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}