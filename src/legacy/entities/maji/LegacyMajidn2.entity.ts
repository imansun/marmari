import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'majidn2' })
export class LegacyMajidn2 {
  @PrimaryColumn({ type: 'character varying', name: 'DlCode' })
  dlCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Name' })
  name: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Unit' })
  unit: string | null;

}