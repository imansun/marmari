import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Description' })
export class LegacyDescription {
  @PrimaryColumn({ type: 'bigint', name: 'VoucherItemID' })
  voucherItemID: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string;

  @PrimaryColumn({ type: 'character varying' })
  new: string;

}