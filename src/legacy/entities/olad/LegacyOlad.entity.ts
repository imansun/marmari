import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'olad' })
export class LegacyOlad {
  @PrimaryColumn({ type: 'double precision' })
  code: string | null;

  @PrimaryColumn({ type: 'double precision' })
  olad: string | null;

}