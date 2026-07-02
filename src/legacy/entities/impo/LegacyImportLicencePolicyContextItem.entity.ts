import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'ImportLicencePolicyContextItem' })
export class LegacyImportLicencePolicyContextItem {
  @PrimaryColumn({ type: 'bigint', name: 'ImportLicencePolicyContextItemID' })
  importLicencePolicyContextItemID: number;

  @Column({ type: 'bigint', name: 'ImportLicenceRef' })
  importLicenceRef: number;

  @Column({ type: 'integer', name: 'ItemType' })
  itemType: number;

  @Column({ type: 'bigint', name: 'BusinessPolicyRef', nullable: true })
  businessPolicyRef: number | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}