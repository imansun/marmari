import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'SerialTemplateSegment' })
export class LegacySerialTemplateSegment {
  @PrimaryColumn({ type: 'bigint', name: 'SerialTemplateSegmentID' })
  serialTemplateSegmentID: number;

  @Column({ type: 'bigint', name: 'SerialTemplateRef' })
  serialTemplateRef: number;

  @Column({ type: 'integer', name: 'SerialTemplateSegmentType' })
  serialTemplateSegmentType: number;

  @Column({ type: 'integer', name: 'Order' })
  order: number;

  @Column({ type: 'character varying', name: 'Name' })
  name: string;

  @Column({ type: 'integer', name: 'Length' })
  length: number;

  @Column({ type: 'character varying', name: 'Value', nullable: true })
  value: string | null;

  @Column({ type: 'integer', name: 'EntityCode', nullable: true })
  entityCode: number | null;

  @Column({ type: 'character varying', name: 'EntityProperty', nullable: true })
  entityProperty: string | null;

  @Column({ type: 'bigint', name: 'EntityInstanceRef', nullable: true })
  entityInstanceRef: number | null;

  @Column({ type: 'integer', name: 'WrappingEntityCode', nullable: true })
  wrappingEntityCode: number | null;

  @Column({ type: 'text', name: 'Settings', nullable: true })
  settings: string | null;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}