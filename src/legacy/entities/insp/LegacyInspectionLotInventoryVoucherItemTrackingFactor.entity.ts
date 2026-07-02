import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'InspectionLotInventoryVoucherItemTrackingFactor' })
export class LegacyInspectionLotInventoryVoucherItemTrackingFactor {
  @PrimaryColumn({ type: 'bigint', name: 'InspectionLotInventoryVoucherItemTrackingFactorID' })
  inspectionLotInventoryVoucherItemTrackingFactorID: number;

  @Column({ type: 'bigint', name: 'InspectionLotRef' })
  inspectionLotRef: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemTrackingFactorRef' })
  inventoryVoucherItemTrackingFactorRef: number;

  @Column({ type: 'numeric', name: 'LotSize', nullable: true })
  lotSize: number | null;

  @Column({ type: 'numeric', name: 'AcceptedValue', nullable: true })
  acceptedValue: number | null;

  @Column({ type: 'numeric', name: 'RejectedValue', nullable: true })
  rejectedValue: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}