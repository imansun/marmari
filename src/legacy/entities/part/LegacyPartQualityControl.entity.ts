import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'PartQualityControl' })
export class LegacyPartQualityControl {
  @PrimaryColumn({ type: 'bigint', name: 'PartQualityControlID' })
  partQualityControlID: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'boolean', name: 'NeedsQualityControl' })
  needsQualityControl: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}