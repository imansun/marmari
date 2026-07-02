import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DLTypeArrangement' })
export class LegacyDLTypeArrangement {
  @PrimaryColumn({ type: 'bigint', name: 'DLTypeArrangementID' })
  dLTypeArrangementID: number;

  @Column({ type: 'bigint', name: 'BudgetEntityDefinitionRef' })
  budgetEntityDefinitionRef: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}