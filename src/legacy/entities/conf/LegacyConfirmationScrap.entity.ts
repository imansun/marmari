import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationScrap' })
export class LegacyConfirmationScrap {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationScrapID' })
  confirmationScrapID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'numeric', name: 'Produced' })
  produced: number;

  @Column({ type: 'numeric', name: 'EquivalentOfOutputProduct' })
  equivalentOfOutputProduct: number;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}