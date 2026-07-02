import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PermissionRequestItem' })
export class LegacyPermissionRequestItem {
  @PrimaryColumn({ type: 'bigint', name: 'PermissionRequestItemID' })
  permissionRequestItemID: number;

  @Column({ type: 'bigint', name: 'PermissionRequestRef' })
  permissionRequestRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'bigint', name: 'AssetRef' })
  assetRef: number;

  @Column({ type: 'bigint', name: 'DLRef', nullable: true })
  dLRef: number | null;

  @Column({ type: 'boolean', name: 'Culprit', nullable: true })
  culprit: boolean | null;

  @Column({ type: 'integer', name: 'TruthMonth', nullable: true })
  truthMonth: number | null;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'integer', name: 'NewGasState', nullable: true })
  newGasState: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}