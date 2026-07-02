import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MandatoryDistributionStructureItem' })
export class LegacyMandatoryDistributionStructureItem {
  @PrimaryColumn({ type: 'bigint', name: 'MandatoryDistributionStructureItemID' })
  mandatoryDistributionStructureItemID: number;

  @Column({ type: 'bigint', name: 'MandatoryDistributionStructureRef' })
  mandatoryDistributionStructureRef: number;

  @Column({ type: 'numeric', name: 'PopulationPercent', nullable: true })
  populationPercent: number | null;

  @Column({ type: 'bigint', name: 'PostRef', nullable: true })
  postRef: number | null;

  @Column({ type: 'bigint', name: 'DepartmentRef', nullable: true })
  departmentRef: number | null;

  @Column({ type: 'numeric', name: 'FromRange' })
  fromRange: number;

  @Column({ type: 'numeric', name: 'ToRange' })
  toRange: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}