import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'vahed' })
export class LegacyVahed {
  @PrimaryColumn({ type: 'character varying' })
  name: string | null;

  @PrimaryColumn({ type: 'double precision' })
  code: string | null;

}