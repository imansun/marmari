import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ExitFromOrganizationItem' })
export class LegacyExitFromOrganizationItem {
  @PrimaryColumn({ type: 'bigint', name: 'ExitFromOrganizationItemID' })
  exitFromOrganizationItemID: number;

  @Column({ type: 'bigint', name: 'ExitFromOrganizationRef' })
  exitFromOrganizationRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'numeric', name: 'AdditionSubtraction' })
  additionSubtraction: number;

  @Column({ type: 'character varying', name: 'Description' })
  description: string;

  @Column({ type: 'character varying', name: 'Description_En' })
  descriptionEn: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}