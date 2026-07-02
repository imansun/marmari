import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReworkOrderReferenceOrder' })
export class LegacyReworkOrderReferenceOrder {
  @PrimaryColumn({ type: 'bigint', name: 'ReworkOrderReferenceOrderID' })
  reworkOrderReferenceOrderID: number;

  @Column({ type: 'bigint', name: 'ReworkOrderRef' })
  reworkOrderRef: number;

  @Column({ type: 'bigint', name: 'ManufacturingOrderRef', nullable: true })
  manufacturingOrderRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}