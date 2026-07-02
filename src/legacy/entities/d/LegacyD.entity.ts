import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'd' })
export class LegacyD {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'double precision' })
  code: string | null;

}