import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'MappingStructureInput' })
export class LegacyMappingStructureInput {
  @PrimaryColumn({ type: 'bigint', name: 'MappingStructureInputID' })
  mappingStructureInputID: number;

  @Column({ type: 'bigint', name: 'MappingStructureRef' })
  mappingStructureRef: number;

  @Column({ type: 'character varying', name: 'Title' })
  title: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'integer', name: 'InputMethod', nullable: true })
  inputMethod: number | null;

  @Column({ type: 'character varying', name: 'FieldType', nullable: true })
  fieldType: string | null;

  @Column({ type: 'character varying', name: 'EntityField', nullable: true })
  entityField: string | null;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

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