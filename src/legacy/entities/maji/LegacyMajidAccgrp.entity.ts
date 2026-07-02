import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MajidAccgrp' })
export class LegacyMajidAccgrp {
  @PrimaryColumn({ type: 'character varying' })
  group: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Costcenter' })
  costcenter: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'VchType' })
  vchType: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'SlCode' })
  slCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'SlName' })
  slName: string | null;

}