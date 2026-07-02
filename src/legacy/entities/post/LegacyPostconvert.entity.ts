import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'postconvert' })
export class LegacyPostconvert {
  @PrimaryColumn({ type: 'double precision' })
  postid: string | null;

  @PrimaryColumn({ type: 'double precision' })
  postcode: string | null;

  @PrimaryColumn({ type: 'character varying' })
  posttitle: string | null;

}