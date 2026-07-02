import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandard' })
export class LegacyCodingStandard {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardID' })
  codingStandardID: number;

  @Column({ type: 'character varying', name: 'StandardTitle' })
  standardTitle: string;

  @Column({ type: 'character varying', name: 'StandardTitleEn' })
  standardTitleEn: string;

  @Column({ type: 'character varying', name: 'ProtocolTitle', nullable: true })
  protocolTitle: string | null;

  @Column({ type: 'character varying', name: 'ProtocolVersion' })
  protocolVersion: string;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}