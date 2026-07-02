import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ReviewDatabase' })
export class LegacyReviewDatabase {
  @PrimaryColumn({ type: 'character varying', name: 'Name' })
  name: string | null;

  @PrimaryColumn({ type: 'bigint', name: 'LastDeployedFiscalYear' })
  lastDeployedFiscalYear: number | null;

}