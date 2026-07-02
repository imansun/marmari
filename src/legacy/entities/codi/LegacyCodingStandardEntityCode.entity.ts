import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardEntityCode' })
export class LegacyCodingStandardEntityCode {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardEntityCodeID' })
  codingStandardEntityCodeID: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'character varying', name: 'Code' })
  code: string;

  @Column({ type: 'bigint', name: 'CodingStandardEntityRef' })
  codingStandardEntityRef: number;

  @Column({ type: 'bigint', name: 'ParentRef', nullable: true })
  parentRef: number | null;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'integer', name: 'Left', default: 0 })
  left: number;

  @Column({ type: 'integer', name: 'Right', default: 0 })
  right: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}