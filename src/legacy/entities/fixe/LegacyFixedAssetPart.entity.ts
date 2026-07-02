import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'FixedAssetPart' })
export class LegacyFixedAssetPart {
  @PrimaryColumn({ type: 'bigint', name: 'FixedAssetPartID' })
  fixedAssetPartID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'IsActive' })
  isActive: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'boolean', name: 'IsGas', nullable: true, default: false })
  isGas: boolean | null;

}