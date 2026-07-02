import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'EntityLookup' })
export class LegacyEntityLookup {
  @PrimaryColumn({ type: 'integer', name: 'Code' })
  code: number;

  @Column({ type: 'character varying', name: 'EntityName' })
  entityName: string;

}