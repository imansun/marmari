import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Specification' })
export class LegacySpecification {
  @PrimaryColumn({ type: 'bigint', name: 'SpecificationID' })
  specificationID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'SpecificationType' })
  specificationType: number;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'PartGroupingRef', nullable: true })
  partGroupingRef: number | null;

}