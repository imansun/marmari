import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationSideProduct' })
export class LegacyConfirmationSideProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationSideProductID' })
  confirmationSideProductID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bigint', name: 'PartUnitRef' })
  partUnitRef: number;

  @Column({ type: 'bigint', name: 'StoreRef', nullable: true })
  storeRef: number | null;

  @Column({ type: 'bigint', name: 'ScrapStoreRef', nullable: true })
  scrapStoreRef: number | null;

  @Column({ type: 'numeric', name: 'Yield' })
  yield: number;

  @Column({ type: 'numeric', name: 'Scrap' })
  scrap: number;

  @Column({ type: 'bigint', name: 'BatchRef', nullable: true })
  batchRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}