import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'RetailServerLink' })
export class LegacyRetailServerLink {
  @PrimaryColumn({ type: 'bigint', name: 'RetailServerLinkID' })
  retailServerLinkID: number;

  @Column({ type: 'bigint', name: 'SourceRetailServerRef' })
  sourceRetailServerRef: number;

  @Column({ type: 'bigint', name: 'TargetRetailServerRef' })
  targetRetailServerRef: number;

  @Column({ type: 'boolean', name: 'IsFullDuplex' })
  isFullDuplex: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}