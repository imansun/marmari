import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SalesOfficePolicy' })
export class LegacySalesOfficePolicy {
  @PrimaryColumn({ type: 'bigint', name: 'SalesOfficePolicyID' })
  salesOfficePolicyID: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef' })
  businessPolicyRef: number;

  @Column({ type: 'bigint', name: 'SalesOfficeRef' })
  salesOfficeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Concept' })
  concept: string;

}