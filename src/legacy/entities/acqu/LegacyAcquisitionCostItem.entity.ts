import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AcquisitionCostItem' })
export class LegacyAcquisitionCostItem {
  @PrimaryColumn({ type: 'bigint', name: 'AcquisitionCostItemID' })
  acquisitionCostItemID: number;

  @Column({ type: 'bigint', name: 'AcquisitionCostRef' })
  acquisitionCostRef: number;

  @Column({ type: 'bigint', name: 'PaymentRef' })
  paymentRef: number;

  @Column({ type: 'numeric', name: 'Amount' })
  amount: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}