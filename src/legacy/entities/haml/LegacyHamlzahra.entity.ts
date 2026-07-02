import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'hamlzahra' })
export class LegacyHamlzahra {
  @PrimaryColumn({ type: 'bigint' })
  invoiceid: number | null;

  @PrimaryColumn({ type: 'bigint' })
  hamlid: number | null;

}