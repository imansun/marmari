import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MRPPartExtension' })
export class LegacyMRPPartExtension {
  @PrimaryColumn({ type: 'bigint', name: 'MRPPartExtensionID' })
  mRPPartExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}