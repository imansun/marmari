import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationLowerGradeProduct' })
export class LegacyConfirmationLowerGradeProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationLowerGradeProductID' })
  confirmationLowerGradeProductID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'ProductionOrderLowerGradeProductRef' })
  productionOrderLowerGradeProductRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}