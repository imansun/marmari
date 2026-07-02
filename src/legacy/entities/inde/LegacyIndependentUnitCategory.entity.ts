import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'IndependentUnitCategory' })
export class LegacyIndependentUnitCategory {
  @PrimaryColumn({ type: 'bigint', name: 'IndependentUnitCategoryID' })
  independentUnitCategoryID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}