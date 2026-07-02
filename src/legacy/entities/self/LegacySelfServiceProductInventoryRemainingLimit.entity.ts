import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SelfServiceProductInventoryRemainingLimit' })
export class LegacySelfServiceProductInventoryRemainingLimit {
  @PrimaryColumn({ type: 'bigint', name: 'SelfServiceProductInventoryRemainingLimitID' })
  selfServiceProductInventoryRemainingLimitID: number;

  @Column({ type: 'integer', name: 'LimitType' })
  limitType: number;

  @Column({ type: 'integer', name: 'ProductType' })
  productType: number;

  @Column({ type: 'bigint', name: 'ProductRef', nullable: true })
  productRef: number | null;

  @Column({ type: 'bigint', name: 'ProductGroupRef', nullable: true })
  productGroupRef: number | null;

  @Column({ type: 'bigint', name: 'UnitRef', nullable: true })
  unitRef: number | null;

  @Column({ type: 'numeric', name: 'StaticQuantity', nullable: true })
  staticQuantity: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}