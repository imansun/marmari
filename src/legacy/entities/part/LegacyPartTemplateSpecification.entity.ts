import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartTemplateSpecification' })
export class LegacyPartTemplateSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PartTemplateSpecificationID' })
  partTemplateSpecificationID: number;

  @Column({ type: 'bigint', name: 'SpecificationRef' })
  specificationRef: number;

  @Column({ type: 'bigint', name: 'PartTemplateRef' })
  partTemplateRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}