import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'temp_Kharid' })
export class LegacyTempKharid {
  @PrimaryColumn({ type: 'character varying', name: 'ID' })
  iD: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Code' })
  code: string | null;

}