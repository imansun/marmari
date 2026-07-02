import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'dateen' })
export class LegacyDateen {
  @PrimaryColumn({ type: 'double precision' })
  perscode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  dateen: string | null;

}