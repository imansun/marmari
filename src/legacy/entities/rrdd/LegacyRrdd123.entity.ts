import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'rrdd123' })
export class LegacyRrdd123 {
  @PrimaryColumn({ type: 'double precision' })
  id: string | null;

  @PrimaryColumn({ type: 'double precision' })
  m: string | null;

}