import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Product' })
export class LegacyProduct {
  @PrimaryColumn({ type: 'bigint', name: 'ProductID' })
  productID: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'DependencyType' })
  dependencyType: number;

  @Column({ type: 'bigint', name: 'PartRef', nullable: true })
  partRef: number | null;

  @Column({ type: 'bigint', name: 'ServiceRef', nullable: true })
  serviceRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'bigint', name: 'PriceBaseUnitRef', nullable: true })
  priceBaseUnitRef: number | null;

  @Column({ type: 'bigint', name: 'SmallestUnitPartEntityUnitRef' })
  smallestUnitPartEntityUnitRef: number;

  @Column({ type: 'bigint', name: 'BiggestUnitPartEntityUnitRef' })
  biggestUnitPartEntityUnitRef: number;

  @Column({ type: 'bigint', name: 'PartMajorEntityUnitRef' })
  partMajorEntityUnitRef: number;

  @Column({ type: 'character varying', name: 'Number' })
  number: string;

  @Column({ type: 'character varying', name: 'SecondCode', nullable: true })
  secondCode: string | null;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'State' })
  state: number;

  @Column({ type: 'boolean', name: 'IsFreeProduct', default: false })
  isFreeProduct: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'PartTrackingFactorCount' })
  partTrackingFactorCount: number;

  @Column({ type: 'integer', name: 'ProductTrackingFactorCount', nullable: true })
  productTrackingFactorCount: number | null;

  @Column({ type: 'boolean', name: 'UserCanInsertTrackingFactor' })
  userCanInsertTrackingFactor: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CriticalDays', default: 0 })
  criticalDays: number;

}