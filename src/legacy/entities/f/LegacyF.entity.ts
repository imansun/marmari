import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'f' })
export class LegacyF {
  @PrimaryColumn({ type: 'bigint', name: 'ProductID' })
  productID: number;

  @PrimaryColumn({ type: 'integer', name: 'Type' })
  type: number;

  @PrimaryColumn({ type: 'integer', name: 'DependencyType' })
  dependencyType: number;

  @PrimaryColumn({ type: 'bigint', name: 'PartRef' })
  partRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'ServiceRef' })
  serviceRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PriceBaseUnitRef' })
  priceBaseUnitRef: number | null;

  @PrimaryColumn({ type: 'bigint', name: 'SmallestUnitPartEntityUnitRef' })
  smallestUnitPartEntityUnitRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'BiggestUnitPartEntityUnitRef' })
  biggestUnitPartEntityUnitRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PartMajorEntityUnitRef' })
  partMajorEntityUnitRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'Number' })
  number: string;

  @PrimaryColumn({ type: 'character varying', name: 'SecondCode' })
  secondCode: string | null;

  @PrimaryColumn({ type: 'character varying', name: 'Name' })
  name: string;

  @PrimaryColumn({ type: 'integer', name: 'State' })
  state: number;

  @PrimaryColumn({ type: 'boolean', name: 'IsFreeProduct' })
  isFreeProduct: boolean;

  @PrimaryColumn({ type: 'bigint', name: 'Creator' })
  creator: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @PrimaryColumn({ type: 'bigint', name: 'CompanyRef' })
  companyRef: number;

  @PrimaryColumn({ type: 'character varying', name: 'Description' })
  description: string | null;

  @PrimaryColumn({ type: 'integer', name: 'PartTrackingFactorCount' })
  partTrackingFactorCount: number;

  @PrimaryColumn({ type: 'integer', name: 'ProductTrackingFactorCount' })
  productTrackingFactorCount: number | null;

  @PrimaryColumn({ type: 'boolean', name: 'UserCanInsertTrackingFactor' })
  userCanInsertTrackingFactor: boolean;

  @PrimaryColumn({ type: 'bytea', name: 'Version' })
  version: Buffer;

}