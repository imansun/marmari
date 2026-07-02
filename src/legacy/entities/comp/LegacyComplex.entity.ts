import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Complex' })
export class LegacyComplex {
  @PrimaryColumn({ type: 'bigint', name: 'ComplexID' })
  complexID: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'bigint', name: 'PlantRef' })
  plantRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}