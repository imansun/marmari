import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'Primitive' })
export class LegacyPrimitive {
  @PrimaryColumn({ type: 'bigint', name: 'PrimitiveID' })
  primitiveID: number;

  @Column({ type: 'bigint', name: 'FieldRef' })
  fieldRef: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Type' })
  type: number;

  @Column({ type: 'character varying', name: 'TypeMetadata', nullable: true })
  typeMetadata: string | null;

  @Column({ type: 'integer', name: 'Index' })
  index: number;

  @Column({ type: 'integer', name: 'PlaceHolderIndex' })
  placeHolderIndex: number;

  @Column({ type: 'numeric', name: 'DefaultNumberValue', nullable: true })
  defaultNumberValue: number | null;

  @Column({ type: 'integer', name: 'DefaultLookupValue', nullable: true })
  defaultLookupValue: number | null;

  @Column({ type: 'bigint', name: 'DefaultReferenceValue', nullable: true })
  defaultReferenceValue: number | null;

  @Column({ type: 'timestamp without time zone', name: 'DefaultDateValue', nullable: true })
  defaultDateValue: Date | null;

  @Column({ type: 'boolean', name: 'DefaultBooleanValue', nullable: true })
  defaultBooleanValue: boolean | null;

  @Column({ type: 'character varying', name: 'DefaultStringValue', nullable: true })
  defaultStringValue: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}