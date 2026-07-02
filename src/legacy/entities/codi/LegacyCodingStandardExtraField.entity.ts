import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardExtraField' })
export class LegacyCodingStandardExtraField {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardExtraFieldID' })
  codingStandardExtraFieldID: number;

  @Column({ type: 'bigint', name: 'CodingStandardRef' })
  codingStandardRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'Description', nullable: true })
  description: string | null;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}