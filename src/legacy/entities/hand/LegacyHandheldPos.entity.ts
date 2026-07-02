import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HandheldPos' })
export class LegacyHandheldPos {
  @PrimaryColumn({ type: 'bigint', name: 'HandheldPosID' })
  handheldPosID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

}