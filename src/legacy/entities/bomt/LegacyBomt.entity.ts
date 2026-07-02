import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'bomt' })
export class LegacyBomt {
  @PrimaryColumn({ type: 'character varying' })
  part: string | null;

  @PrimaryColumn({ type: 'character varying' })
  partcode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  itemcode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  item: string | null;

  @PrimaryColumn({ type: 'character varying' })
  tamplecode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  tample: string | null;

  @PrimaryColumn({ type: 'character varying' })
  zarib: string | null;

}