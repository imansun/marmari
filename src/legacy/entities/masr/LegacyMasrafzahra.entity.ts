import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'masrafzahra' })
export class LegacyMasrafzahra {
  @PrimaryColumn({ type: 'bigint' })
  slref: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'costcenterrefcostcenterref\r\ncostcenterref' })
  costcenterrefcostcenterrefCostcenterref: number | null;

  @PrimaryColumn({ type: 'bigint' })
  groupref: number | null;

}