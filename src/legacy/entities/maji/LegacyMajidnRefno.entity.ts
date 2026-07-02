import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MajidnRefno' })
export class LegacyMajidnRefno {
  @PrimaryColumn({ type: 'character varying', name: 'Date' })
  date: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'VCHno' })
  vCHno: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Refno' })
  refno: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Partcode' })
  partcode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Qty' })
  qty: string | null;

}