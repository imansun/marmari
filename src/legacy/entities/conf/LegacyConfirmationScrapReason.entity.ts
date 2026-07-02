import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationScrapReason' })
export class LegacyConfirmationScrapReason {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationScrapReasonID' })
  confirmationScrapReasonID: number;

  @Column({ type: 'bigint', name: 'ConfirmationRef' })
  confirmationRef: number;

  @Column({ type: 'bigint', name: 'ScrapReasonRef' })
  scrapReasonRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

}