import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'p' })
export class LegacyP {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'double precision' })
  postcode: string | null;

}