import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'OutputTransactionItemProduction' })
export class LegacyOutputTransactionItemProduction {
  @PrimaryColumn({ type: 'bigint', name: 'OutputTransactionItemProductionID' })
  outputTransactionItemProductionID: number;

  @Column({ type: 'bigint', name: 'OutputTransactionItemRef' })
  outputTransactionItemRef: number;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef' })
  billOfMaterialRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef' })
  workstationRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}