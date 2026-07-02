import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ConfirmationProductionOrderComponentScrapReason' })
export class LegacyConfirmationProductionOrderComponentScrapReason {
  @PrimaryColumn({ type: 'bigint', name: 'ConfirmationProductionOrderComponentScrapReasonID' })
  confirmationProductionOrderComponentScrapReasonID: number;

  @Column({ type: 'bigint', name: 'ConfirmationProductionOrderComponentRef' })
  confirmationProductionOrderComponentRef: number;

  @Column({ type: 'bigint', name: 'ConfirmationProductionOrderComponentTrackingFactorRef', nullable: true })
  confirmationProductionOrderComponentTrackingFactorRef: number | null;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'ScrapReasonRef' })
  scrapReasonRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}