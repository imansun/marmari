import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodeBlock' })
export class LegacyCodeBlock {
  @PrimaryColumn({ type: 'bigint', name: 'CodeBlockID' })
  codeBlockID: number;

  @Column({ type: 'bigint', name: 'CodeTemplateRef' })
  codeTemplateRef: number;

  @Column({ type: 'integer', name: 'Length' })
  length: number;

  @Column({ type: 'integer', name: 'Position' })
  position: number;

  @Column({ type: 'character varying', name: 'ValueText' })
  valueText: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'integer', name: 'CodeBlockType' })
  codeBlockType: number;

  @Column({ type: 'integer', name: 'CodingType', nullable: true })
  codingType: number | null;

  @Column({ type: 'bigint', name: 'ValueID', nullable: true })
  valueID: number | null;

}