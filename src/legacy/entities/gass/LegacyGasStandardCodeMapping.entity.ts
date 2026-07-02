import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'GasStandardCodeMapping' })
export class LegacyGasStandardCodeMapping {
  @PrimaryColumn({ type: 'bigint', name: 'GasStandardCodeMappingID' })
  gasStandardCodeMappingID: number;

  @PrimaryColumn({ type: 'character varying', name: 'StandardCode' })
  standardCode: string;

  @PrimaryColumn({ type: 'bigint', name: 'AssetGroupRef' })
  assetGroupRef: number;

  @PrimaryColumn({ type: 'bigint', name: 'PartRef' })
  partRef: number;

}