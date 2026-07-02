import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'hamledit' })
export class LegacyHamledit {
  @PrimaryColumn({ type: 'bigint' })
  invoiceidzz: number | null;

  @PrimaryColumn({ type: 'bigint' })
  partyref: number | null;

  @PrimaryColumn({ type: 'character varying' })
  partyname: string | null;

}