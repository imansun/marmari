import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'mojavez' })
export class LegacyMojavez {
  @PrimaryColumn({ type: 'character varying' })
  id: string | null;

  @PrimaryColumn({ type: 'character varying' })
  code: string | null;

}