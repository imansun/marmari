import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'prtr' })
export class LegacyPrtr {
  @PrimaryColumn({ type: 'bigint' })
  productid: number | null;

  @PrimaryColumn({ type: 'bigint' })
  prnum: number | null;

}