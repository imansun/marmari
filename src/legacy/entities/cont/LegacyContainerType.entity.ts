import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ContainerType' })
export class LegacyContainerType {
  @PrimaryColumn({ type: 'bigint', name: 'ContainerTypeID' })
  containerTypeID: number;

  @Column({ type: 'character varying', name: 'Type' })
  type: string;

  @Column({ type: 'character varying', name: 'ISOSign' })
  iSOSign: string;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'bigint', name: 'DimUnitRef' })
  dimUnitRef: number;

  @Column({ type: 'character varying', name: 'Material' })
  material: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

}