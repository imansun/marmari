import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardEntityCodeMapping' })
export class LegacyCodingStandardEntityCodeMapping {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardEntityCodeMappingID' })
  codingStandardEntityCodeMappingID: number;

  @Column({ type: 'bigint', name: 'CodingStandardEntityCodeRef' })
  codingStandardEntityCodeRef: number;

  @Column({ type: 'bigint', name: 'CodeRef' })
  codeRef: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}