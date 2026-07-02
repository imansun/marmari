import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'haml000815' })
export class LegacyHaml000815 {
  @PrimaryColumn({ type: 'bigint' })
  fid: number | null;

  @PrimaryColumn({ type: 'bigint' })
  hid: number | null;

}