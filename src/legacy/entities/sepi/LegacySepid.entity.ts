import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'sepid' })
export class LegacySepid {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

}