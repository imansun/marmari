import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CsvMajid' })
export class LegacyCsvMajid {
  @PrimaryColumn({ type: 'character varying' })
  factno: string;

  @PrimaryColumn({ type: 'double precision' })
  partcode: string;

  @PrimaryColumn({ type: 'character varying' })
  unit: string;

  @PrimaryColumn({ type: 'character varying' })
  tarh: string;

  @PrimaryColumn({ type: 'character varying' })
  berand: string;

  @PrimaryColumn({ type: 'character varying' })
  khat: string;

  @PrimaryColumn({ type: 'character varying' })
  daraje: string;

  @PrimaryColumn({ type: 'integer' })
  qty: number;

}