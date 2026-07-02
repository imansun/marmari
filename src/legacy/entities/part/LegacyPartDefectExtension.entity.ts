import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartDefectExtension' })
export class LegacyPartDefectExtension {
  @PrimaryColumn({ type: 'bigint', name: 'PartDefectExtensionID' })
  partDefectExtensionID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}