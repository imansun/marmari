import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MappingInput' })
export class LegacyMappingInput {
  @PrimaryColumn({ type: 'bigint', name: 'MappingInputID' })
  mappingInputID: number;

  @Column({ type: 'bigint', name: 'MappingRef' })
  mappingRef: number;

  @Column({ type: 'bigint', name: 'MappingStructureInputRef' })
  mappingStructureInputRef: number;

  @Column({ type: 'bigint', name: 'RowNumber' })
  rowNumber: number;

  @Column({ type: 'character varying', name: 'FromValue' })
  fromValue: string;

  @Column({ type: 'character varying', name: 'ToValue', nullable: true })
  toValue: string | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'InputMethod', nullable: true })
  inputMethod: number | null;

  @Column({ type: 'integer', name: 'TransformedFromValue', nullable: true })
  transformedFromValue: number | null;

  @Column({ type: 'integer', name: 'TransformedToValue', nullable: true })
  transformedToValue: number | null;

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