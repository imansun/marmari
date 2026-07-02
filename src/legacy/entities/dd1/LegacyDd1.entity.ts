import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'dd1' })
export class LegacyDd1 {
  @PrimaryColumn({ type: 'double precision' })
  id: string | null;

  @PrimaryColumn({ type: 'double precision' })
  m: string | null;

}