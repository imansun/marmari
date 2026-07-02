import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartTechnicalSpecification' })
export class LegacyPartTechnicalSpecification {
  @PrimaryColumn({ type: 'bigint', name: 'PartTechnicalSpecificationID' })
  partTechnicalSpecificationID: number;

  @Column({ type: 'character varying', name: 'PartCode' })
  partCode: string;

  @Column({ type: 'character varying', name: 'TechnicalSpecification' })
  technicalSpecification: string;

  @Column({ type: 'character varying', name: 'PropertiesComment' })
  propertiesComment: string;

  @Column({ type: 'bigint', name: 'ProducerRef', nullable: true })
  producerRef: number | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}