import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'DirectInputMaterialItem' })
export class LegacyDirectInputMaterialItem {
  @PrimaryColumn({ type: 'bigint', name: 'DirectInputMaterialItemID' })
  directInputMaterialItemID: number;

  @Column({ type: 'bigint', name: 'DirectInputMaterialRef' })
  directInputMaterialRef: number;

  @Column({ type: 'numeric', name: 'Quantity' })
  quantity: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'numeric', name: 'Fee' })
  fee: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}