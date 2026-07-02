import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FilterDLType' })
export class LegacyFilterDLType {
  @PrimaryColumn({ type: 'bigint', name: 'FilterDLTypeID' })
  filterDLTypeID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'boolean', name: 'IsOptional' })
  isOptional: boolean;

  @Column({ type: 'bigint', name: 'DLTypeRef' })
  dLTypeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}