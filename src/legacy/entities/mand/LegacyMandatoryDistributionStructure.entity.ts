import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MandatoryDistributionStructure' })
export class LegacyMandatoryDistributionStructure {
  @PrimaryColumn({ type: 'bigint', name: 'MandatoryDistributionStructureID' })
  mandatoryDistributionStructureID: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'DistributionBaseCode' })
  distributionBaseCode: number;

  @Column({ type: 'integer', name: 'AverageGroupCode', nullable: true })
  averageGroupCode: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}