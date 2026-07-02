import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Package' })
export class LegacyPackage {
  @PrimaryColumn({ type: 'bigint', name: 'PackageID' })
  packageID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Name_En', nullable: true })
  nameEn: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'numeric', name: 'Weight' })
  weight: number;

  @Column({ type: 'numeric', name: 'Length', nullable: true })
  length: number | null;

  @Column({ type: 'numeric', name: 'Width', nullable: true })
  width: number | null;

  @Column({ type: 'numeric', name: 'Height', nullable: true })
  height: number | null;

  @Column({ type: 'bigint', name: 'WeightUnitRef' })
  weightUnitRef: number;

  @Column({ type: 'bigint', name: 'DimUnitRef', nullable: true })
  dimUnitRef: number | null;

}