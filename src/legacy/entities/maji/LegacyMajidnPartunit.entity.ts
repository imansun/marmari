import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MajidnPartunit' })
export class LegacyMajidnPartunit {
  @PrimaryColumn({ type: 'character varying', name: 'Partcode' })
  partcode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Majorunitname' })
  majorunitname: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'MajorUnitRate' })
  majorUnitRate: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Partunitname' })
  partunitname: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'PartUnitrate' })
  partUnitrate: string | null;

}