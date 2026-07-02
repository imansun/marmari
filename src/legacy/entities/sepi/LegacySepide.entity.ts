import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sepide' })
export class LegacySepide {
  @PrimaryColumn({ type: 'double precision' })
  partcode: string;

  @PrimaryColumn({ type: 'integer' })
  location: number;

}