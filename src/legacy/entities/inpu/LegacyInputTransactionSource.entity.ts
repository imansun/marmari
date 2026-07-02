import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InputTransactionSource' })
export class LegacyInputTransactionSource {
  @PrimaryColumn({ type: 'bigint', name: 'InputTransactionSourceID' })
  inputTransactionSourceID: number;

  @Column({ type: 'bigint', name: 'InputTransactionRef' })
  inputTransactionRef: number;

  @Column({ type: 'bigint', name: 'WorkstationRef', nullable: true })
  workstationRef: number | null;

  @Column({ type: 'bigint', name: 'BillOfMaterialRef', nullable: true })
  billOfMaterialRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}