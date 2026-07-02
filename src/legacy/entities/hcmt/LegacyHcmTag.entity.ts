import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'HcmTag' })
export class LegacyHcmTag {
  @PrimaryColumn({ type: 'character varying', name: 'Key' })
  key: string;

  @PrimaryColumn({ type: 'character varying', name: 'Value' })
  value: string;

}