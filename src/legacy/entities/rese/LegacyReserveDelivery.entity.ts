import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReserveDelivery' })
export class LegacyReserveDelivery {
  @PrimaryColumn({ type: 'bigint', name: 'ReserveDeliveryID' })
  reserveDeliveryID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemRef' })
  inventoryVoucherItemRef: number;

  @Column({ type: 'bigint', name: 'ReserveItemRef' })
  reserveItemRef: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'InventoryVoucherItemTrackingFactorRef', nullable: true })
  inventoryVoucherItemTrackingFactorRef: number | null;

  @Column({ type: 'bigint', name: 'ReserveItemTrackingFactorRef', nullable: true })
  reserveItemTrackingFactorRef: number | null;

}