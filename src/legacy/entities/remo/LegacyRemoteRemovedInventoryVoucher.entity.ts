import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RemoteRemovedInventoryVoucher' })
export class LegacyRemoteRemovedInventoryVoucher {
  @PrimaryColumn({ type: 'bigint', name: 'RemoteRemovedInventoryVoucherID' })
  remoteRemovedInventoryVoucherID: number;

  @Column({ type: 'bigint', name: 'InventoryVoucherRef' })
  inventoryVoucherRef: number;

  @Column({ type: 'timestamp without time zone', name: 'Date' })
  date: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}