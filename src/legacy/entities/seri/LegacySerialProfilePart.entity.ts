import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialProfilePart' })
export class LegacySerialProfilePart {
  @PrimaryColumn({ type: 'bigint', name: 'SerialProfilePartID' })
  serialProfilePartID: number;

  @Column({ type: 'bigint', name: 'SerialProfileRef' })
  serialProfileRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}