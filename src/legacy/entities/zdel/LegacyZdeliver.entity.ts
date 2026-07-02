import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'zdeliver' })
export class LegacyZdeliver {
  @PrimaryColumn({ type: 'bigint', name: 'InventoryVoucherID' })
  inventoryVoucherID: number;

  @PrimaryColumn({ type: 'bigint' })
  haml: number;

  @PrimaryColumn({ type: 'bigint' })
  partyid: number;

  @PrimaryColumn({ type: 'bigint' })
  invoiceid: number;

}