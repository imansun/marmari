import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MappingOutput' })
export class LegacyMappingOutput {
  @PrimaryColumn({ type: 'bigint', name: 'MappingOutputID' })
  mappingOutputID: number;

  @Column({ type: 'bigint', name: 'MappingRef' })
  mappingRef: number;

  @Column({ type: 'bigint', name: 'MappingStructureOutputRef' })
  mappingStructureOutputRef: number;

  @Column({ type: 'bigint', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'Value' })
  value: string;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'timestamp without time zone', name: 'CreationDate' })
  creationDate: Date;

  @Column({ type: 'bigint', name: 'Creator' })
  creator: number;

  @Column({ type: 'timestamp without time zone', name: 'LastModificationDate' })
  lastModificationDate: Date;

  @Column({ type: 'bigint', name: 'LastModifier' })
  lastModifier: number;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}