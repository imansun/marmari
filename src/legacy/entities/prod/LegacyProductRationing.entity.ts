import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ProductRationing' })
export class LegacyProductRationing {
  @PrimaryColumn({ type: 'bigint', name: 'ProductRationingID' })
  productRationingID: number;

  @Column({ type: 'bigint', name: 'ProductRef' })
  productRef: number;

  @Column({ type: 'bigint', name: 'UnitRef' })
  unitRef: number;

  @Column({ type: 'boolean', name: 'SalableWithoutRationing' })
  salableWithoutRationing: boolean;

  @Column({ type: 'boolean', name: 'UnrationedLeftOversAreSalable' })
  unrationedLeftOversAreSalable: boolean;

  @Column({ type: 'boolean', name: 'UnsalableBeforeCompleteRationing' })
  unsalableBeforeCompleteRationing: boolean;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'RationFreeSaleLevel' })
  rationFreeSaleLevel: number;

}