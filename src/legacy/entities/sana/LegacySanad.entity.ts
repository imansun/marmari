import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sanad' })
export class LegacySanad {
  @PrimaryColumn({ type: 'double precision' })
  row: string | null;

  @PrimaryColumn({ type: 'character varying' })
  sl: string | null;

  @PrimaryColumn({ type: 'character varying' })
  dl: string | null;

  @PrimaryColumn({ type: 'double precision' })
  vchtimid: string | null;

  @PrimaryColumn({ type: 'double precision' })
  rownumber: string | null;

  @PrimaryColumn({ type: 'double precision' })
  number: string | null;

  @PrimaryColumn({ type: 'double precision' })
  seq: string | null;

  @PrimaryColumn({ type: 'character varying' })
  date: string | null;

  @PrimaryColumn({ type: 'double precision' })
  debit: string | null;

  @PrimaryColumn({ type: 'double precision' })
  credit: string | null;

  @PrimaryColumn({ type: 'character varying' })
  description: string | null;

  @PrimaryColumn({ type: 'double precision' })
  daily: string | null;

  @PrimaryColumn({ type: 'double precision' })
  chqno: string | null;

}