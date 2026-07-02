import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'sepidejam_sepidejam_sg3', name: 'NumberingMethodEntityAttribute' })
export class LegacyNumberingMethodEntityAttribute {
  @PrimaryColumn({ type: 'bigint', name: 'NumberingMethodEntityAttributeID' })
  numberingMethodEntityAttributeID: number;

  @Column({ type: 'bigint', name: 'NumberingMethodRef' })
  numberingMethodRef: number;

  @Column({ type: 'character varying', name: 'AttributeComponentName' })
  attributeComponentName: string;

  @Column({ type: 'character varying', name: 'AttributeEntityName' })
  attributeEntityName: string;

  @Column({ type: 'boolean', name: 'IsForSecondNumber' })
  isForSecondNumber: boolean;

  @Column({ type: 'bytea', name: 'Version' })
  version: Buffer;

}