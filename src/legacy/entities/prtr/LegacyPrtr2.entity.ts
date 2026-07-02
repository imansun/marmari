import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'prtr2' })
export class LegacyPrtr2 {
  @PrimaryColumn({ type: 'bigint' })
  prid: number | null;

  @PrimaryColumn({ type: 'bigint' })
  prnum: number | null;

}