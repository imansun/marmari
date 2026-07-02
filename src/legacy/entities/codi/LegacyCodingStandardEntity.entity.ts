import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'CodingStandardEntity' })
export class LegacyCodingStandardEntity {
  @PrimaryColumn({ type: 'bigint', name: 'CodingStandardEntityID' })
  codingStandardEntityID: number;

  @Column({ type: 'bigint', name: 'CodingStandardRef' })
  codingStandardRef: number;

  @Column({ type: 'integer', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'character varying', name: 'TitleEN' })
  titleEN: string;

  @Column({ type: 'character varying', name: 'EntityName', nullable: true })
  entityName: string | null;

  @Column({ type: 'character varying', name: 'EntityKey', nullable: true })
  entityKey: string | null;

  @Column({ type: 'boolean', name: 'IsStatic' })
  isStatic: boolean;

  @Column({ type: 'boolean', name: 'MapingIsAvailableForLeaf' })
  mapingIsAvailableForLeaf: boolean;

  @Column({ type: 'integer', name: 'DetailReference' })
  detailReference: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}