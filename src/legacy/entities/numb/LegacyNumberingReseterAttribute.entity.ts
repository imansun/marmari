import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingReseterAttribute' })
export class LegacyNumberingReseterAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingReseterAttributeID' })
  numberingReseterAttributeID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'integer', name: 'Priority' })
  priority: number;

  @Column({ type: 'character varying', name: 'AttributeName' })
  attributeName: string;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

  @Column({ type: 'character varying', name: 'AttributeDisplayName', nullable: true })
  attributeDisplayName: string | null;

}