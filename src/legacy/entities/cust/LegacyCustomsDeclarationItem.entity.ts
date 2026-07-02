import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CustomsDeclarationItem' })
export class LegacyCustomsDeclarationItem {
  @PrimaryColumn({ type: 'bigint', name: 'CustomsDeclarationItemID' })
  customsDeclarationItemID: number;

  @Column({ type: 'bigint', name: 'ProformaRef' })
  proformaRef: number;

  @Column({ type: 'bigint', name: 'CustomsDeclarationRef' })
  customsDeclarationRef: number;

  @Column({ type: 'bigint', name: 'CargoItemRef' })
  cargoItemRef: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'ProductUnitRef' })
  productUnitRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'numeric', name: 'MajorUnitQuantity' })
  majorUnitQuantity: number;

  @Column({ type: 'bigint', name: 'PackagingMethodRef', nullable: true })
  packagingMethodRef: number | null;

  @Column({ type: 'bigint', name: 'PackageRef', nullable: true })
  packageRef: number | null;

  @Column({ type: 'numeric', name: 'PackageWeight', nullable: true })
  packageWeight: number | null;

  @Column({ type: 'bigint', name: 'PackageWeightUnitRef', nullable: true })
  packageWeightUnitRef: number | null;

  @Column({ type: 'numeric', name: 'PackageCount', nullable: true })
  packageCount: number | null;

  @Column({ type: 'boolean', name: 'PackageCountIsFixed' })
  packageCountIsFixed: boolean;

  @Column({ type: 'bigint', name: 'TransportationVehicleRef', nullable: true })
  transportationVehicleRef: number | null;

  @Column({ type: 'numeric', name: 'Weight', nullable: true })
  weight: number | null;

  @Column({ type: 'numeric', name: 'NetWeight', nullable: true })
  netWeight: number | null;

  @Column({ type: 'numeric', name: 'Value', nullable: true })
  value: number | null;

  @Column({ type: 'numeric', name: 'ValueInOperationalCurrency', nullable: true })
  valueInOperationalCurrency: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}