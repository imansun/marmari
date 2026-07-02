import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'AlternativePart' })
export class LegacyAlternativePart {
  @PrimaryColumn({ type: 'bigint', name: 'AlternativePartID' })
  alternativePartID: number;

  @Column({ type: 'bigint', name: 'AlternativePartRef' })
  alternativePartRef: number;

  @Column({ type: 'bigint', name: 'PartRef' })
  partRef: number;

  @Column({ type: 'smallint', name: 'Priority' })
  priority: number;

  @Column({ type: 'numeric', name: 'Ratio' })
  ratio: number;

  @Column({ type: 'boolean', name: 'IsReverseAlternative' })
  isReverseAlternative: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}