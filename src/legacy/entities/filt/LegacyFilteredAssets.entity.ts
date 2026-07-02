import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'filteredAssets' })
export class LegacyFilteredAssets {
  @PrimaryColumn({ type: 'bigint', name: 'FilteredAssetID' })
  filteredAssetID: number;

  @PrimaryColumn({ type: 'bigint', name: 'AstState' })
  astState: number | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'DocDate' })
  docDate: Date | null;

  @PrimaryColumn({ type: 'boolean', name: 'DiffrentInitialDate' })
  diffrentInitialDate: boolean | null;

  @PrimaryColumn({ type: 'timestamp without time zone', name: 'UtilizationDate' })
  utilizationDate: Date | null;

  @PrimaryColumn({ type: 'bigint', name: 'UserRef' })
  userRef: number;

}