import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FilterEntity' })
export class LegacyFilterEntity {
  @PrimaryColumn({ type: 'bigint', name: 'FilterEntityID' })
  filterEntityID: number;

  @Column({ type: 'bigint', name: 'ReferenceBudgetEntityDefinitionRef' })
  referenceBudgetEntityDefinitionRef: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}